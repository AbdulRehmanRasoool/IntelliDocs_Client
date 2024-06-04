import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { SignInForm } from '../components/signinform'

export default function SignIn(){
    return(
        <main className="page-wrapper">
            <Navbar />
            <SignInForm />
            <Footer />
        </main>
    );
}