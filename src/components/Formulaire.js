import {useForm} from "react-hook-form";

const Formulaire = function ({action}) {

    const {register, handleSubmit, formState: {errors}} = useForm();


    return (
        <>
            <h2>Nouvelle série</h2>

            <form onSubmit={handleSubmit(action)}>

                <div>
                    <label htmlFor='title'>Titre</label>
                    <input id='title' {...register('title', {
                        required: "Cette série doit bien avoir un titre ?"
                    })}/>
                    <p className="error">{errors.title && errors.title.message}</p>
                </div>
                <div>
                    <label htmlFor='desc'>Description</label>
                    <textarea id='desc' {...register('description', {
                        required: "Avec une description, ce serait mieux !",
                        minLength: {value: 30, message: "Un peu court comme description"},
                        maxLength: {value: 100, message: "Oulà, c'est trop long ça, il faut condenser !"}
                    })}/>
                    <p className="error">{errors.description && errors.description.message}</p>
                </div>
                <div>
                    <label htmlFor='image'>Lien de l'image</label>
                    <input id='image' {...register('image', {
                        required: "Avec une image, ce serait plus joli",
                        minLength: {value: 5, message: "Ce lien ne semble pas valide"}
                    })}/>
                    <p className="error">{errors.image && errors.image.message}</p>
                </div>
                <div>
                    <label htmlFor='finished'>Terminée ?</label>
                    <input id='finished' type='checkbox' {...register('finished')}/>
                </div>
                <p>
                    <button>Enregistrer</button>
                </p>

            </form>
        </>
    )
}

export default Formulaire;