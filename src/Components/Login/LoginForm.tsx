import React, {FC} from 'react';
import Button from "../Common/Button/Button";
import {useForm} from "react-hook-form";
import {LoginData} from "../../Types/Types";
import styles from './Login.module.css';
import {Redirect} from 'react-router-dom';

//crear propiedades delas listas 
type LoginFormProps = {
    authorized: boolean
    submitAuthData: (data: LoginData) => Promise<string | undefined>
}

const LoginForm: FC<LoginFormProps> = (props) => {
//crear el login enviando las cosas falta terminar
    const {register, handleSubmit, formState: {errors}, setError} = useForm<LoginData>({mode: 'onBlur'});
//sincronizar y enviar las cosas que el usuario puso
    const onSubmit = handleSubmit(async (data) => {
        const response = await props.submitAuthData(data);
        setError('password', {type: 'string', message: response});
    })

    return (
        props.authorized
            ?
            <Redirect to={'/main'}/>
            :
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <label htmlFor="username">Nombre del Usuario</label>
                    </div>
                    <input className={styles.loginInput} type="text"
                           {...register('username', {required: 'Nombre del usuario requerido!'})}/>

                    {errors.username && <div className={styles.error}> {errors.username.message}</div>}
                </div>

                <div>
                    <div>
                        <label htmlFor="password"> Contraseña</label>
                    </div>
                    <input className={styles.loginInput} type="password"
                           {...register('password', {required: 'Password is required!'})}/>

                    {errors.password && <div className={styles.error}> {errors.password.message}</div>}
                </div>
                <Button text={'Iniciar'}/>
            </form>
    );
};

export default LoginForm;