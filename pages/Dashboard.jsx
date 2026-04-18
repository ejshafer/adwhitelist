import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, TrendingUp, Shield, Settings, LogOut, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        navigate(createPageUrl("Home"));
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [navigate]);

  const { data: userAdAccounts = [] } = useQuery({
    queryKey: ['userAdAccounts', user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const assignments = await base44.entities.UserAdAccount.filter({ user_email: user.email });
      
      const accountsWithDetails = await Promise.all(
        assignments.map(async (assignment) => {
          try {
            const accounts = await base44.entities.AdAccount.filter({ id: assignment.ad_account_id });
            return accounts.length > 0 ? { ...accounts[0], access_level: assignment.access_level } : null;
          } catch (error) {
            return null;
          }
        })
      );
      
      return accountsWithDetails.filter(acc => acc !== null);
    },
    enabled: !!user?.email,
    initialData: []
  });

  const handleLogout = async () => {
    await base44.auth.logout();
    navigate(createPageUrl("Home"));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const planColors = {
    Normal: "from-blue-500 to-blue-600",
    Professional: "from-purple-500 to-pink-500",
    Enterprise: "from-purple-600 to-pink-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Adwhitelist</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600 hidden sm:block">{user?.email}</span>
              {user?.role === 'admin' && (
                <Button
                  variant="outline"
                  onClick={() => navigate(createPageUrl("Admin"))}
                  className="rounded-full"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Panel
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="rounded-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.full_name || 'User'}!
          </h1>
          <p className="text-gray-600 mb-8">
            Here's an overview of your account and ad accounts
          </p>
        </motion.div>

        {/* Plan Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Your Plan</span>
                <Badge className={`bg-gradient-to-r ${planColors[user?.plan || 'Normal']} text-white border-0 px-4 py-1`}>
                  {user?.plan || 'Normal'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div className="font-semibold text-gray-900">
                      {user?.plan_status === 'active' ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Ad Accounts</div>
                    <div className="font-semibold text-gray-900">{userAdAccounts.length}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Member Since</div>
                    <div className="font-semibold text-gray-900">
                      {user?.signup_date ? new Date(user.signup_date).toLocaleDateString() : new Date(user?.created_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ad Accounts List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Ad Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              {userAdAccounts.length === 0 ? (
                <div className="text-center py-12">
                  <Facebook className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">No ad accounts assigned yet</p>
                  <p className="text-sm text-gray-500">
                    Contact support to get your ad accounts set up
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userAdAccounts.map((account, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all"
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
                          <Badge variant={account.status === 'active' ? 'default' : 'secondary'} className="bg-green-100 text-green-700">
                            {account.status}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {account.access_level}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="mb-4 opacity-90">
                Our support team is here to help you succeed. Contact us anytime!
              </p>
              <Button variant="secondary" className="rounded-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}