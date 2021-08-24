import React from 'react'
import { connect } from 'react-redux'

const Jugadores = ({jugadores}) => {
    return (
        <section>
            <h2>Jugadores</h2>
            <div className="contenedor">
                {
                jugadores.map(jugador => (
                    <article className="jugador">
                    <img src={jugador.foto} alt="foto" />
                    <h3>{jugador.nombre}</h3>
                    <div>
                        <button>Titular</button>
                        <button>Suplente</button>
                    </div>
                </article>
                ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

export default connect(mapStateToProps/*,mapDispatchtoProps*/)(Jugadores)
