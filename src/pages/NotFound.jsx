import React, {Component} from 'react';
import Header from "../Components/Header/Header";

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="flex  flex-col justify-center text-center mt-20">
                    <h1 className="bg-blend-color-dodge font-extrabold cursor-pointer
                   ">NOT FOUND!</h1>
                    <h2>Galiba girdiğiniz sayfa mevcut değil</h2>
                    <h2>URL kontrol ediniz</h2>
                    <div className="justify-center">
                        <img className="inline w-20"
                             src="https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg"
                             alt="Resim de mevcut değil ki :)"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;