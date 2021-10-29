import React from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Checkbox from '@/Components/Checkbox';

export default function Login (props) {


    const { data, setData, post, processing, errors, reset } = useForm({
        telephone: '',
        password: '',
        remember: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        
        post(route('login'));
    };

    return (
        <div className="content-wrapper">
        <section className="content">
            <div className="container-fluid">
                <div className="login-box w-75 p-10 ml-5">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a href="/" className="h1" style={{color:"#6c757d"}}><b>ZYONE</b>MANAGEMENT</a>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="telephone" value="Votre Numero de Télételephone" />
                                    <Input type="text" name="telephone" value={data.telephone} className="mt-1 block w-full" autoComplete="username" isFocused={true} handleChange={onHandleChange}/>
                                    {errors.telephone && <div>{errors.telephone}</div>}
                                </div>
                                <div className="mt-4">
                                    <Label forInput="password" value="Votre Mot de Passe" />
                                    <Input type="password" name="password" value={data.password} className="mt-1 block w-full" autoComplete="current-password" handleChange={onHandleChange} />
                                    {errors.password && <div>{errors.password}</div>}
                                </div>
                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                                        <span className="ml-2 text-sm text-gray-600">Connexion Automatique</span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <button type="submit" disabled={processing} style={{backgroundColor:'#6c757d'}} className="h1 btn btn-block btn-info btn-sm">
                                        ENVOYER
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

Login.layout = (page) => <Authenticated children={page} />
