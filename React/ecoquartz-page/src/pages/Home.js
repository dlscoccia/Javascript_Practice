import React, { useEffect, useState } from 'react'
import { slider } from '../data/products'
import { FaTools } from 'react-icons/fa'
const [slider2, slider3, slider4] = slider

const Home = () => {

    /*     function timeout() {
            setTimeout(function () {
                setImage(slider[num])
                num += 1
                if (num === 3){
                    num = 0
                }
                console.log(num)
                timeout();
            }, 10000);
        }
       // timeout() */
    return (
        <>
            <main style={{ marginTop: '80px' }}>
                <section>
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, modi.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae commodi est eum iusto labore tempora aliquid incidunt nulla quisquam.</p>
                    <img src={slider2} alt="" style={{ width: '100%', height: 'auto' }} />
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, modi.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae commodi est eum iusto labore tempora aliquid incidunt nulla quisquam.</p>
                    <img src={slider3} alt="" style={{ width: '100%', height: 'auto' }} />
                </section>
                <section>
                    <article>
                        <FaTools />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolor culpa magnam.</p>
                    </article>
                    <article>
                        <FaTools />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolor culpa magnam.</p>
                    </article>
                    <article>
                        <FaTools />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolor culpa magnam.</p>
                    </article>
                </section>
                <section>
                    <img src={slider4} alt="alt" />
                </section>
                <section>
                    <h2>Productos</h2>
                    <div>
                        <div>
                            <img src={slider3} alt="" />
                            <h3>Producto 1</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae minus voluptate!</p>
                        </div>
                        <div>
                            <img src={slider3} alt="" />
                            <h3>Producto 2</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae minus voluptate!</p>
                        </div>
                        <div>
                            <img src={slider3} alt="" />
                            <h3>Producto 3</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae minus voluptate!</p>
                        </div>
                        <div>
                            <img src={slider3} alt="" />
                            <h3>Producto 4</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum molestiae minus voluptate!</p>
                        </div>
                    </div>
                <button>Prodcutos</button>
                </section>
                <section>
                    <div>
                        <h4>
                            Direccion
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur blanditiis alias ipsum qui inventore.
                        </p>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.080207373002!2d-63.196058618592005!3d9.752476248725175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3340af9f18d11b%3A0x11594da46da2a5a1!2sMaderas%20El%20Teide!5e0!3m2!1ses-419!2sco!4v1631302607578!5m2!1ses-419!2sco" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title='unique'></iframe>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
