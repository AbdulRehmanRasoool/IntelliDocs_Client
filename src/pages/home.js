import { Navbar } from '../components/navbar';
import { Slider } from '../components/slider';
import { Seperator } from '../components/seperator';
import { Service } from '../components/service';
import { Pricing } from '../components/pricing';
import { Faq } from '../components/faq';
import { Footer } from '../components/footer';
import { Copyright } from '../components/copyright';
import { Content } from '../components/content';

export default function Home() {
    return (
        <main className="page-wrapper">
            <Navbar />
            <Slider />
            <Service />
            <Seperator />
            <Content />
            <Seperator />
            <Pricing />
            <Seperator />
            <Faq />
            <Footer />
            <Copyright />
        </main>
    )
}