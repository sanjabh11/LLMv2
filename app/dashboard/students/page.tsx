import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Students</h2>
      <Card>
        <CardHeader>
          <CardTitle>Student Management</CardTitle>
          <CardDescription>View and manage all students in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Student list and management features will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  )
}