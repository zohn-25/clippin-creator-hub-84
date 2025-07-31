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
  Target, 
  Users,
  PlayCircle,
  Calendar,
  Award,
  BarChart3,
  Plus,
  Star,
  MessageSquare,
  Search
} from 'lucide-react';

export const DemoBrandDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const stats = [
    { title: 'Campaign ROI', value: '340%', icon: TrendingUp, change: '+45%' },
    { title: 'Total Reach', value: '8.2M', icon: Eye, change: '+28%' },
    { title: 'Investment', value: '₹2.4L', icon: DollarSign, change: '+12%' },
    { title: 'Active Campaigns', value: '24', icon: Target, change: '+6%' }
  ];

  const activeCampaigns = [
    {
      id: 1,
      title: 'Summer Fashion Collection 2024',
      budget: '₹85,000',
      spent: '₹62,400',
      reach: '1.2M',
      engagement: '8.4%',
      status: 'Active',
      creators: 12,
      deadline: '2024-03-15'
    },
    {
      id: 2,
      title: 'Tech Gadget Launch Campaign',
      budget: '₹1,20,000',
      spent: '₹45,600',
      reach: '850K',
      engagement: '12.1%',
      status: 'Active',
      creators: 8,
      deadline: '2024-03-20'
    },
    {
      id: 3,
      title: 'Health & Wellness Series',
      budget: '₹65,000',
      spent: '₹65,000',
      reach: '2.1M',
      engagement: '15.7%',
      status: 'Completed',
      creators: 15,
      deadline: '2024-02-28'
    }
  ];

  const topPerformers = [
    {
      name: 'Arjun Kumar',
      niche: 'Tech Reviews',
      followers: '245K',
      engagement: '8.9%',
      campaigns: 5,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      niche: 'Fashion & Lifestyle',
      followers: '180K',
      engagement: '12.4%',
      campaigns: 8,
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Rohit Singh',
      niche: 'Fitness',
      followers: '320K',
      engagement: '7.8%',
      campaigns: 3,
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const recentApplications = [
    { creator: 'Aarav Patel', campaign: 'Summer Fashion Collection', applied: '2 hours ago', status: 'pending' },
    { creator: 'Sneha Reddy', campaign: 'Tech Gadget Launch', applied: '5 hours ago', status: 'approved' },
    { creator: 'Vikram Joshi', campaign: 'Health & Wellness', applied: '1 day ago', status: 'reviewing' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-4">
              Brand Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your campaigns and track creator partnerships
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="lg" className="border-white/20">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
            <Button size="lg" className="glow-button bg-gradient-primary">
              <Plus className="h-5 w-5 mr-2" />
              Post Campaign
            </Button>
          </div>
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
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Campaign Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Active Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeCampaigns.slice(0, 2).map((campaign) => (
                    <div key={campaign.id} className="p-4 rounded-lg bg-muted/20">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">{campaign.title}</h3>
                        <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Budget Progress</span>
                          <span>{campaign.spent} / {campaign.budget}</span>
                        </div>
                        <Progress 
                          value={(parseInt(campaign.spent.replace(/[₹,]/g, '')) / parseInt(campaign.budget.replace(/[₹,]/g, ''))) * 100} 
                          className="h-2" 
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{campaign.creators} creators</span>
                          <span>{campaign.reach} reach</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Applications */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    Recent Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div>
                        <p className="font-medium">{app.creator}</p>
                        <p className="text-sm text-muted-foreground">{app.campaign}</p>
                        <p className="text-xs text-muted-foreground">{app.applied}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant={
                          app.status === 'approved' ? 'default' : 
                          app.status === 'pending' ? 'secondary' : 'outline'
                        }>
                          {app.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-orbitron font-bold">Campaign Management</h2>
              <Button className="glow-button">
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>
            
            <div className="grid gap-6">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Due: {campaign.deadline}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {campaign.creators} creators
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {campaign.reach} reach
                          </span>
                        </div>
                      </div>
                      <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                        {campaign.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Budget Used</div>
                        <div className="text-lg font-semibold">{campaign.spent}</div>
                        <div className="text-xs text-muted-foreground">of {campaign.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Engagement</div>
                        <div className="text-lg font-semibold text-success">{campaign.engagement}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creators" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-orbitron font-bold">Top Performing Creators</h2>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Browse All Creators
              </Button>
            </div>
            
            <div className="grid gap-6">
              {topPerformers.map((creator, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{creator.name}</h3>
                        <p className="text-muted-foreground mb-2">{creator.niche}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>{creator.followers} followers</span>
                          <span>•</span>
                          <span>{creator.engagement} engagement</span>
                          <span>•</span>
                          <span>{creator.campaigns} campaigns</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{creator.rating}</span>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">View Profile</Button>
                          <Button size="sm">Invite</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Campaign Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average ROI</span>
                      <span className="font-semibold text-success">340%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Best Performing Niche</span>
                      <span className="font-semibold">Health & Wellness</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Engagement</span>
                      <span className="font-semibold">12.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Creator Retention Rate</span>
                      <span className="font-semibold text-success">89%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Monthly Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Reach Growth</span>
                        <span className="text-sm font-medium">+28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Engagement Growth</span>
                        <span className="text-sm font-medium">+15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">ROI Improvement</span>
                        <span className="text-sm font-medium">+45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};