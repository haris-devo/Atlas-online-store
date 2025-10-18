import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activities = [
  { id: '1', time: '09:24', text: 'New user signed up' },
  { id: '2', time: '10:02', text: 'Payment received from Acme Inc.' },
  { id: '3', time: '11:47', text: 'Invoice INV-003 marked as overdue' },
  { id: '4', time: '13:15', text: 'Subscription upgraded by Globex Corp.' },
];

export function ActivityTimeline() {
  return (
    <Card className="border-futuristic">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map(activity => (
            <li key={activity.id} className="flex items-start gap-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
                <p className="text-foreground">{activity.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
