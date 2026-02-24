import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Users, Plus, Trash2, Settings, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Admin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("accounts");
  
  // Form states
  const [newAccount, setNewAccount] = useState({
    facebook_account_id: "",
    account_name: "",
    business_manager_id: "",
    daily_spend_limit: "",
    status: "active"
  });
  
  const [assignmentForm, setAssignmentForm] = useState({
    user_email: "",
    ad_account_id: "",
    access_level: "view"
  });

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const currentUser = await base44.auth.me();
        if (currentUser.role !== 'admin') {
          navigate(createPageUrl("Dashboard"));
          return;
        }
        setUser(currentUser);
      } catch (error) {
        navigate(createPageUrl("Home"));
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, [navigate]);

  const { data: adAccounts = [] } = useQuery({
    queryKey: ['adAccounts'],
    queryFn: () => base44.entities.AdAccount.list(),
    initialData: []
  });

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: () => base44.entities.User.list(),
    initialData: []
  });

  const { data: assignments = [] } = useQuery({
    queryKey: ['assignments'],
    queryFn: () => base44.entities.UserAdAccount.list(),
    initialData: []
  });

  const createAccountMutation = useMutation({
    mutationFn: (data) => base44.entities.AdAccount.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['adAccounts']);
      setNewAccount({
        facebook_account_id: "",
        account_name: "",
        business_manager_id: "",
        daily_spend_limit: "",
        status: "active"
      });
    }
  });

  const deleteAccountMutation = useMutation({
    mutationFn: (id) => base44.entities.AdAccount.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['adAccounts']);
    }
  });

  const assignAccountMutation = useMutation({
    mutationFn: (data) => base44.entities.UserAdAccount.create({
      ...data,
      assigned_date: new Date().toISOString()
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments']);
      setAssignmentForm({
        user_email: "",
        ad_account_id: "",
        access_level: "view"
      });
    }
  });

  const deleteAssignmentMutation = useMutation({
    mutationFn: (id) => base44.entities.UserAdAccount.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments']);
    }
  });

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createAccountMutation.mutate({
      ...newAccount,
      daily_spend_limit: parseFloat(newAccount.daily_spend_limit) || 0
    });
  };

  const handleAssignAccount = (e) => {
    e.preventDefault();
    assignAccountMutation.mutate(assignmentForm);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Admin Panel</span>
              </div>
              <Badge className="bg-red-100 text-red-700 border-red-200">Administrator</Badge>
            </div>

            <Button
              variant="outline"
              onClick={() => navigate(createPageUrl("Dashboard"))}
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setActiveTab("accounts")}
            variant={activeTab === "accounts" ? "default" : "outline"}
            className="rounded-full"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Ad Accounts
          </Button>
          <Button
            onClick={() => setActiveTab("assignments")}
            variant={activeTab === "assignments" ? "default" : "outline"}
            className="rounded-full"
          >
            <Users className="w-4 h-4 mr-2" />
            User Assignments
          </Button>
        </div>

        {/* Ad Accounts Tab */}
        {activeTab === "accounts" && (
          <div className="space-y-8">
            {/* Add New Account */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Add New Ad Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreateAccount} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Facebook Account ID
                        </label>
                        <Input
                          placeholder="act_123456789"
                          value={newAccount.facebook_account_id}
                          onChange={(e) => setNewAccount({...newAccount, facebook_account_id: e.target.value})}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Account Name
                        </label>
                        <Input
                          placeholder="Client XYZ Campaign"
                          value={newAccount.account_name}
                          onChange={(e) => setNewAccount({...newAccount, account_name: e.target.value})}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Manager ID
                        </label>
                        <Input
                          placeholder="123456789012345"
                          value={newAccount.business_manager_id}
                          onChange={(e) => setNewAccount({...newAccount, business_manager_id: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Daily Spend Limit ($)
                        </label>
                        <Input
                          type="number"
                          placeholder="25000"
                          value={newAccount.daily_spend_limit}
                          onChange={(e) => setNewAccount({...newAccount, daily_spend_limit: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={createAccountMutation.isPending}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {createAccountMutation.isPending ? "Creating..." : "Create Ad Account"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Accounts List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>All Ad Accounts ({adAccounts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adAccounts.map((account, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
                              <Facebook className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">
                                {account.account_name}
                              </h3>
                              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                <span>ID: {account.facebook_account_id}</span>
                                {account.business_manager_id && (
                                  <>
                                    <span>•</span>
                                    <span>BM: {account.business_manager_id}</span>
                                  </>
                                )}
                                {account.daily_spend_limit && (
                                  <>
                                    <span>•</span>
                                    <span>Limit: ${account.daily_spend_limit.toLocaleString()}/day</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={account.status === 'active' ? 'default' : 'secondary'}>
                              {account.status}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteAccountMutation.mutate(account.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {adAccounts.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        No ad accounts yet. Create one to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div className="space-y-8">
            {/* Assign Account to User */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Assign Ad Account to User</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAssignAccount} className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          User Email
                        </label>
                        <Select
                          value={assignmentForm.user_email}
                          onValueChange={(value) => setAssignmentForm({...assignmentForm, user_email: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select user" />
                          </SelectTrigger>
                          <SelectContent>
                            {users.map((u) => (
                              <SelectItem key={u.id} value={u.email}>
                                {u.email} ({u.full_name})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ad Account
                        </label>
                        <Select
                          value={assignmentForm.ad_account_id}
                          onValueChange={(value) => setAssignmentForm({...assignmentForm, ad_account_id: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            {adAccounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                {account.account_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Access Level
                        </label>
                        <Select
                          value={assignmentForm.access_level}
                          onValueChange={(value) => setAssignmentForm({...assignmentForm, access_level: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="view">View Only</SelectItem>
                            <SelectItem value="edit">Edit</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={assignAccountMutation.isPending}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {assignAccountMutation.isPending ? "Assigning..." : "Assign Account"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Assignments List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Current Assignments ({assignments.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {assignments.map((assignment, idx) => {
                      const account = adAccounts.find(a => a.id === assignment.ad_account_id);
                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4"
                        >
                          <div className="flex items-center gap-4">
                            <Users className="w-5 h-5 text-purple-600" />
                            <div>
                              <div className="font-semibold text-gray-900">{assignment.user_email}</div>
                              <div className="text-sm text-gray-600">
                                {account?.account_name || 'Unknown Account'}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{assignment.access_level}</Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteAssignmentMutation.mutate(assignment.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                    {assignments.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        No assignments yet. Assign accounts to users to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}