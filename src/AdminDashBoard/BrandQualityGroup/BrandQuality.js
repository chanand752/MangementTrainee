// Parent Brand Quality
import BrandQualityTable from "./BrandQualityTable";
import BrandQualityNavbar from "./BrandQualitynavbar";
import SearchBrandQuality from "./SearchBrandQuality";
import { Col, Container, Row } from "react-bootstrap";


export default function AdminPage() {
    return (
        <div >
            {/* <BrandQualityNavbar /> */}
            <SearchBrandQuality />
            <BrandQualityTable />


        </div>
    )
}