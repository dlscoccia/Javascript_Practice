import React from 'react'
import style from './PokeCard.module.css'
import backgrounds from '../bg'
import {CgPokemon} from 'react-icons/cg'

const PokeCard = ({ name, img, stats, types, id, moves }) => {
    const bg = backgrounds[types[0]].bgCard
    return (
        <li className={style.cardItem} style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className={style.cardContainer}>
                <div className={style.imageContainer}>
                    <img src={img} alt={name} className={style.pokeImage} />
                </div>
                <div className={style.pokeInfo}>
                    <h2 className={style.pokeName} style={{borderBottom: `${backgrounds[types[0]].color} solid 3px`}}>{name}</h2>
                    <h4 className={style.pokeId}><CgPokemon className={style.pokeball}/>#{String(id).padStart(3, '0')}</h4>
                    <ul className={style.pokeTypes}>
                        {
                            types.map(type => <li style={{background: backgrounds[type].color}} className={style.pokeType}>{type}</li>)
                        }
                    </ul>
                    <div className={style.pokeLists}>
                        <div>
                            <h3 className={style.pokeSubtitle}><em>Moves</em></h3>
                            <ol className={style.pokeList}>
                                {
                                    moves.map((move, idx) => idx < 4 ? <li>{move}</li> : '')
                                }
                            </ol>
                        </div>
                        <div>
                            <h3 className={style.pokeSubtitle}><em>Stats</em></h3>
                            <ul className={style.pokeList}>
                                <li>HP: <b>{stats.hp}</b></li>
                                <li>ATTACK: <b>{stats.attack}</b></li>
                                <li>DEFENSE: <b>{stats.defense}</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default PokeCard
