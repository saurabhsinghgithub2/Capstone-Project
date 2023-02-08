import HeroImage from '../assets/food/food4.webp';
export default function Heading(props) {
    return (
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="reserve-header-text">
                <h1>{props.head}</h1>
            </div>
        </header>
    );
}
