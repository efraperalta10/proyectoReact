import React, {Component} from "react"

class App extends Component{

    constructor(){
        super()
        this.state={
            id:'',
            marca:'',
            colores:[],
            tallas:[],
            precio:'',
            material:'',
            zapatos: [],
            _id:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addZapato=this.addZapato.bind(this);
    }

    addZapato(e){
        if(this.state._id){
            fetch(`/api/zapatos/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html:'Zapato actualizado'})
                this.setState({id:'', marca:'', colores:[], tallas:[], precio:'', material:'',_id:''})
                this.fetchZapatos()
            })
        }
        else{
            fetch('/api/zapatos',{
                method:'POST',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html:'Zapato guardado!'})
                    this.setState({id:'',marca:'',colores:[],tallas:[],precio:'',material:''})
                    this.fetchZapatos();
                })
                .catch(err => console.log(err));
        }
        e.preventDefault();
    }

    componentDidMount(){
        this.fetchZapatos();
    }

    fetchZapatos(){
        fetch('/api/zapatos')
            .then(res => res.json())
            .then(data => {
                this.setState({zapatos:data})
                console.log(this.state.zapatos)
            });
    }

    deleteZapato(id){
        if(confirm('Seguro que quieres eliminar el zapato?')){
            fetch(`/api/zapatos/${id}`,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html:'Zapato eliminado'});
                this.fetchZapatos()
            });
        }
    }

    editZapato(Oid){
        fetch(`/api/zapatos/${Oid}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                id:data.id,
                marca:data.marca,
                colores:data.colores,
                tallas:data.tallas,
                precio:data.precio,
                material:data.material,
                _id:data._id,
            })
        })
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    render(){
        return(
            <div>
                {/*Navegacion*/}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Zapateria</a>
                    </div>
                </nav>

                <div className="">
                    <div className="row">
                        <div className="col s4">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addZapato}>
                                    <div className="row">
                                            <div className="input-field col s12">
                                                <input name="id" onChange={this.handleChange} type="text" placeholder="ID" value={this.state.id}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="marca" onChange={this.handleChange} type="text" placeholder="Marca" value={this.state.marca}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="colores" onChange={this.handleChange} type="text" placeholder="colores" value={this.state.colores}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="tallas" onChange={this.handleChange} type="text" placeholder="Tallas" value={this.state.tallas}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="precio" onChange={this.handleChange} type="text" placeholder="Precio" value={this.state.precio}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="material" onChange={this.handleChange} type="text" placeholder="Material" value={this.state.material}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Marca</th>
                                        <th>Colores</th>
                                        <th>Tallas</th>
                                        <th>Precio</th>
                                        <th>Material</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.zapatos.map(zapato=>{
                                            return(
                                                <tr key={zapato._id}>
                                                    <td>{zapato.id}</td>
                                                    <td>{zapato.marca}</td>
                                                    <td>{zapato.colores.map((color) => <text>{color}, </text>)}</td>
                                                    <td>{zapato.tallas.map((talla) => <text>{talla}, </text>)}</td>
                                                    <td>{zapato.precio}</td>
                                                    <td>{zapato.material}</td>
                                                    <td>
                                                        <button className="btn red darken-4" onClick={() => this.deleteZapato(zapato._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button className="btn yellow darken-4" onClick={() => this.editZapato(zapato._id)}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;