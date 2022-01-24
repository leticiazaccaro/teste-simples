import SideMenu from "src/components/SideMenu";
import Container from "src/components/Container";
import Header from "src/components/Header";
import BreadcrumbList from "src/components/BreadcrumbList";
import FiltersBar from "src/components/FiltersBar";
import CardTable from "src/components/CardTable";
import Banner from "src/components/Banner";

export default function Home() {
    return (
        <div className={`
            h-screen flex
        `}>
        <SideMenu />
        <Container>
            <Header />
            <BreadcrumbList />
            <Banner />
            <FiltersBar />
            <CardTable />
        </Container>
        </div>
    )
}
