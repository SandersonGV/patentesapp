const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function showMessageToast(icon, title) {
    Toast.fire({
        icon: icon,
        title: title
    })
}

async function ShowQuestion(title) {
    let result = await Swal.fire({
        title: title,
        showCancelButton: true,
        confirmButtonText: 'Ok',
    })

    return result.isConfirmed;
}

async function ShowMessage(icon, title, text) {
    let result = await Swal.fire({
        title: title,
        icon: icon,
        html: text,
    })

    return result;
}

function validaOjeto(objeto) {
    return []
    const propriedadesVazias = [];
    for (let propriedade in objeto) {
        if (!objeto[propriedade]) {
            const mensagem = `${propriedade} deve ser preenchida`;
            propriedadesVazias.push(mensagem);
        }
    }
    return propriedadesVazias;
}


const validateObjects = 
    {
        grupo: {
            props: [
                {
                    name: "",
                    type: Number,
                    required: false
                }
            ]
        },
        dinamica: {
            props: [
                {
                    name: "",
                    type: Number,
                    required: false
                }
            ]
        },
    }
