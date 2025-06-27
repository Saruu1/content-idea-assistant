import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type Props = {
  idea: string
  caption: string
  hashtags: string[]
  hook: string
}

export default function ResultCard({ idea, caption, hashtags, hook }: Props) {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl text-center">📌 Idea</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          <p>{idea}</p>

          <div>
            <h3 className="font-medium">🪝 Hook:</h3>
            <p className="italic">“{hook}”</p>
          </div>

          <div>
            <h3 className="font-medium">📄 Caption:</h3>
            <p>{caption}</p>
          </div>

          <div>
            <h3 className="font-medium">🏷️ Hashtags:</h3>
            <p className="text-muted-foreground break-words">{hashtags.join(" ")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
