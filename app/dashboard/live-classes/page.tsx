import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LiveClassesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Live Classes</h2>
      <Card>
        <CardHeader>
          <CardTitle>Live Class Management</CardTitle>
          <CardDescription>View and manage all live classes in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Live class list and management features will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  )
}