import React from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faList, faChartPie, faPager } from '@fortawesome/free-solid-svg-icons'

const dashboard = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 mt-2 p-3">
                    <div className="info-1">
                        <div className="header">
                            <h6><FontAwesomeIcon className="icon" icon={faFolder}/> Mes activites</h6>
                        </div>
                        <div className="body">
                            <div className="row p-3">
                                <div className="col-md-4 text-center">
                                    <div className="info-1-bulle">
                                        <h6>Nombre des dossiers</h6>
                                        <p>2300</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="info-1-bulle">
                                        <h6>Dossiers en retard</h6>
                                        <p>232</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="info-1-bulle">
                                        <h6>Dossiers en cours</h6>
                                        <p>432</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-6 text-center">
                                    <div className="info-1-bulle">
                                        <h6>Revenu previsionnel</h6>
                                        <p>1 000 000</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="info-1-bulle">
                                        <h6>Rev prev moyen</h6>
                                        <p>500 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mt-2 p-3">
                    <div className="info-2">
                        <div className="header">
                            <h6><FontAwesomeIcon className="icon" icon={faFolder}/> Evolutions de mes dossiers</h6>
                        </div>
                        <div className="body">
                            <div className="row info">
                                <div className="col-md-12">
                                    <div className="info-2-bulle-1">
                                        <div className="info-folder">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Reference</th>
                                                        <th>Client</th>
                                                        <th>Clerc</th>
                                                        <th>Date de signature</th>
                                                        <th>Etats</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>100212</td>
                                                        <td>Claude Aimé</td>
                                                        <td>Jessica Sarah</td>
                                                        <td>12/03/2022</td>
                                                        <td>
                                                            <div className="etat-folder-en-cours">
                                                                En cours
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100212</td>
                                                        <td>Claude Aimé</td>
                                                        <td>Jessica Sarah</td>
                                                        <td>12/03/2022</td>
                                                        <td>
                                                            <div className="etat-folder-en-retard">
                                                                En retard
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100212</td>
                                                        <td>Claude Aimé</td>
                                                        <td>Jessica Sarah</td>
                                                        <td>12/03/2022</td>
                                                        <td>
                                                            <div className="etat-folder-en-cours">
                                                                En cours
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100212</td>
                                                        <td>Claude Aimé</td>
                                                        <td>Jessica Sarah</td>
                                                        <td>12/03/2022</td>
                                                        <td>
                                                            <div className="etat-folder-en-retard">
                                                                En retard
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="tache">
                        <div className="header">
                            <h6><FontAwesomeIcon className="icon" icon={faList}/> Mes taches</h6>
                        </div>
                        <div className="row">
                            <div className="col-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stat">
                        <div className="header">
                            <h6><FontAwesomeIcon className="icon" icon={faChartPie}/> Statistiques</h6>
                        </div>
                        Stats
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="actus">
                        <div className="header">
                            <h6><FontAwesomeIcon className="icon" icon={faPager}/> Actualités</h6>
                        </div>
                        <div className="body">
                            <p className="text-actus">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed lobortis ex. In ac elementum odio, quis ullamcorper arcu. Maecenas in ullamcorper magna, eu malesuada velit. Ut consequat ullamcorper nulla, vel interdum diam tempus at. Vivamus vitae risus congue, laoreet augue sit amet, vulputate nisi. Nullam imperdiet fringilla nibh eget posuere</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  dashboard