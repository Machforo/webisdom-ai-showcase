import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, Mail, Building2, MessageSquare, Calendar, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  "full name": string;
  email: string;
  "Company Name": string | null;
  Interest: string | null;
  "Additional Message": string | null;
  Date: string | null;
  Time: string | null;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const ADMIN_EMAIL = "webisdomtech@gmail.com";
  const ADMIN_PASSWORD = "webisdomtech@123";

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
      
      // Set up realtime subscription
      const channel = supabase
        .channel('contact-submissions')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'Contact Form Submission'
          },
          () => {
            fetchSubmissions();
            toast({
              title: "New Submission",
              description: "A new contact form submission has been received.",
            });
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [isAuthenticated]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Contact Form Submission')
        .select('*')
        .order('Date', { ascending: false })
        .order('Time', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load submissions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Welcome",
        description: "Successfully logged in to admin panel.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Contact Form Submissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Submissions</CardTitle>
              <Badge variant="secondary">{submissions.length} total</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" />
                <p className="mt-2 text-muted-foreground">Loading submissions...</p>
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No submissions yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission, index) => (
                      <TableRow key={index}>
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <div>{submission.Date || 'N/A'}</div>
                              <div className="text-xs text-muted-foreground">{submission.Time || 'N/A'}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{submission["full name"]}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <a href={`mailto:${submission.email}`} className="hover:underline">
                              {submission.email}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            {submission["Company Name"] || "N/A"}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{submission.Interest || "General"}</Badge>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="flex items-start gap-2">
                            <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                            <p className="text-sm line-clamp-2">
                              {submission["Additional Message"] || "No message"}
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;