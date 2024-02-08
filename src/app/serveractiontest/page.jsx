import { sayHello } from "@/lib/actions"

const ServerActionTestPage = () => {
    const actionInComponent = async () => {
        "use server"
        console.log("it works!")
    }
  return (
    <div>
      <form action={actionInComponent}>
        <button>Test me</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage
