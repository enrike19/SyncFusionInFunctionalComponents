import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from '@syncfusion/ej2-react-navigations';

const Carousel = () => {
    return (
        <CarouselComponent>
            <CarouselItemsDirective>
                <CarouselItemDirective template="<div className='fs-5'>Slide 1</div>"/>
                <CarouselItemDirective template="<div className='fs-5'>Slide 2</div>"/>
                <CarouselItemDirective template="<div className='fs-5'>Slide 3</div>"/>
                <CarouselItemDirective template="<div className='fs-5'>Slide 4</div>"/>
                <CarouselItemDirective template="<div className='fs-5'>Slide 5</div>"/>
            </CarouselItemsDirective>
        </CarouselComponent>
    );
}

export default Carousel;
