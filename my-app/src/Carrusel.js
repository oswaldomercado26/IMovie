var React = require('react');
var ReactDOM = require('react-dom');
//libreria para carrusel
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="#" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="#" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="#" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="#" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 5</p>
                </div>
                
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));