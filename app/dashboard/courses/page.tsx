import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoursesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
      <Card>
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>View and manage all courses in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Course list and management features will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  )
}