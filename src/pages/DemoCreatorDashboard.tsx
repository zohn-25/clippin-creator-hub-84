import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Eye, 
  DollarSign, 
  Video, 
  Calendar, 
  Users,
  PlayCircle,
  Clock,
  Award,
  Star,
  Search
} from 'lucide-react';

export const DemoCreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const stats = [
    { title: 'Total Earnings', value: '₹45,320', icon: DollarSign, change: '+12%' },
    { title: 'Total Views', value: '2.4M', icon: Eye, change: '+18%' },
    { title: 'Videos Created', value: '156', icon: Video, change: '+5%' },
    { title: 'Subscribers Gained', value: '12.5K', icon: Users, change: '+24%' }
  ];

  const recentVideos = [
    {
      id: 1,
      title: 'Top 10 Gaming Tips for Beginners',
      views: '45.2K',
      earnings: '₹2,340',
      status: 'Published',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'React Tutorial: Building Modern Apps',
      views: '32.1K',
      earnings: '₹1,890',
      status: 'Processing',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Tech Review: Latest Smartphones',
      views: '67.8K',
      earnings: '₹3,240',
      status: 'Published',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop'
    }
  ];

  const upcomingPayments = [
    { date: '2024-02-15', amount: '₹8,450', status: 'Pending' },
    { date: '2024-02-20', amount: '₹12,340', status: 'Approved' },
    { date: '2024-02-25', amount: '₹6,780', status: 'Processing' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-4">
              Creator Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome back! Here's your performance overview
            </p>
          </div>
          <Button size="lg" className="glow-button bg-gradient-primary">
            <Search className="h-5 w-5 mr-2" />
            Search Campaigns
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover-3d">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-success flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-card w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="videos">My Videos</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PlayCircle className="h-5 w-5 mr-2 text-primary" />
                    Recent Videos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentVideos.map((video) => (
                    <div key={video.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-16 h-12 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{video.title}</p>
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.earnings}</span>
                        </div>
                      </div>
                      <Badge variant={video.status === 'Published' ? 'default' : 'secondary'}>
                        {video.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Performance Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    This Month's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Views Goal</span>
                      <span className="text-sm font-medium">840K / 1M</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Revenue Goal</span>
                      <span className="text-sm font-medium">₹38K / ₹50K</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Upload Goal</span>
                      <span className="text-sm font-medium">12 / 15 videos</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-orbitron font-bold">My Videos</h2>
              <Button className="glow-button">
                <Video className="h-4 w-4 mr-2" />
                Upload New Video
              </Button>
            </div>
            
            <div className="grid gap-6">
              {recentVideos.map((video) => (
                <Card key={video.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-32 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {video.views} views
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {video.earnings}
                          </span>
                          <Badge variant={video.status === 'Published' ? 'default' : 'secondary'}>
                            {video.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <div className="text-sm text-muted-foreground">Engagement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15min</div>
                    <div className="text-sm text-muted-foreground">Avg. Watch Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{payment.date}</div>
                          <div className="text-sm text-muted-foreground">Payment due</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{payment.amount}</div>
                        <Badge variant={
                          payment.status === 'Approved' ? 'default' : 
                          payment.status === 'Pending' ? 'secondary' : 'outline'
                        }>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};