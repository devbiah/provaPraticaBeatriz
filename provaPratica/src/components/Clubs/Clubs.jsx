import { useState, useEffect } from "react";
import "./Clubs.css"
function Clubs() {
    const [Responsive, setResponsive] = useState([]);
    const [Erro, setErro] = useState(null);

    useEffect(() => {
        fetch(`https://api.cartola.globo.com/clubes`)
            .then(response => response.json()).then(data => {setResponsive(Object.values(data)||[])}).catch(Erro => {
                console.log(Erro)
                setErro(Erro)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <div className="list-club">
            {Erro !== null? <div className="erro">
                    <p>Houve um erro ao buscar os clubes. Tente novamente mais tarde!</p>
                </div>:<ul>
                    {Responsive.map((club) => (
                        <li>
                            <div className="club">
                                <img src={club.escudos['60x60']} />
                                    <div>
                                        <p><strong>{club.nome}</strong></p>
                                    <p>{club.apelido}</p>
                                </div>
                            </div>
                        </li>
                    ))}
              </ul>}
        </div>
    );
}
export default Clubs