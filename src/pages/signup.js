import { Footer } from '../components/footer'
import { Form } from '../components/form'
import { Navbar } from '../components/navbar'

export default function SignUp(){
    return(
        <main className="page-wrapper">
            <Navbar />
            <Form/>
            <Footer />
        </main>
    )
}