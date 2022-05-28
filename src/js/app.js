// const btnBar = document.getElementById("btn-bar");
// const btnBarHor = document.getElementById("btn-bar-hor");
const ctx1 = document.getElementById("graficoBar").getContext("2d");
const ctx2 = document.getElementById("graficoBarHor").getContext("2d");
const ctx3 = document.getElementById("graficoPie").getContext("2d");
const formAnios = document.getElementById("formAnios");
const btnGraficar = document.getElementById("btn-graficar");
const ctx4 = document.getElementById("graficoDouParametro").getContext("2d");
const ctx5 = document.getElementById("graficoPolParametro").getContext("2d");
const ctx6 = document.getElementById("graficoLineParametro").getContext("2d");

const generarNumeroAleatorio = (numero) => {
    return Math.floor(Math.random() * numero);
};

const colorRandom = () => {
    const r = generarNumeroAleatorio(255);
    const g = generarNumeroAleatorio(255);
    const b = generarNumeroAleatorio(255);
    return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
        borderColor: `rgba(${r}, ${g}, ${b}, 1)`,
    };
};

const cargarDatosGraficoBarra = async () => {
    try {
        // document.getElementById("graficoBar").style.display = "block";
        // document.getElementById("graficoBarHor").style.display = "none";
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBar";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBg = [];
        const colorsBor = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].producto_stock);
            colorsBg.push(colors.backgroundColor);
            colorsBor.push(colors.borderColor);
        }
        new Chart(ctx1, {
            type: "bar",
            data: {
                labels: title,
                datasets: [
                    {
                        label: "# in Stock",
                        data: amount,
                        backgroundColor: colorsBg,
                        borderColor: colorsBor,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const cargarDatosGraficoBarraHor = async () => {
    try {
        // document.getElementById("graficoBar").style.display = "none";
        // document.getElementById("graficoBarHor").style.display = "block";
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBar";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBg = [];
        const colorsBor = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].producto_stock);
            colorsBg.push(colors.backgroundColor);
            colorsBor.push(colors.borderColor);
        }
        new Chart(ctx2, {
            type: "bar",
            data: {
                labels: title,
                datasets: [
                    {
                        axis: "y",
                        label: "# in Stock",
                        data: amount,
                        fill: false,
                        backgroundColor: colorsBg,
                        borderColor: colorsBor,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                indexAxis: "y",
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const cargarDatosGraficoPie = async () => {
    try {
        // document.getElementById("graficoBar").style.display = "block";
        // document.getElementById("graficoBarHor").style.display = "none";
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBar";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBg = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].producto_stock);
            colorsBg.push(colors.borderColor);
        }
        new Chart(ctx3, {
            type: "pie",
            data: {
                labels: title,
                datasets: [
                    {
                        label: "# in Stock",
                        data: amount,
                        backgroundColor: colorsBg,
                        hoverOffset: 4,
                    },
                ],
            },
        });
    } catch (error) {
        console.log(error);
    }
};

// btnBar.addEventListener("click", cargarDatosGraficoBarra);
// btnBarHor.addEventListener("click", cargarDatosGraficoBarraHor);

document.addEventListener("DOMContentLoaded", () => {
    cargarDatosGraficoBarra();
    cargarDatosGraficoBarraHor();
    cargarDatosGraficoPie();
    obtenerAnios();
});

/********************Funciones graficos con parámetros********************/

const obtenerAnios = async () => {
    const date = new Date();
    const year = date.getFullYear();
    let html;
    for (let i = 2015; i <= year + 1; i++) {
        html += `<option value="${i}">${i}</option>`;
    }
    fechaInicio.innerHTML = html;
    fechaFin.innerHTML = html;
};

const cargarDatosGraficoDouParametros = async () => {
    try {
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBarParametro";
        const response = await fetch(url, {
            method: "POST",
            body: new FormData(formAnios),
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBor = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].cantidad);
            colorsBor.push(colors.borderColor);
        }
        const newChart = new Chart(ctx4, {
            type: "doughnut",
            data: {
                labels: title,
                datasets: [
                    {
                        label: "# in Stock",
                        data: amount,
                        backgroundColor: colorsBor,
                        hoverOffset: 4,
                    },
                ],
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const cargarDatosGraficoPolarParametros = async () => {
    try {
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBarParametro";
        const response = await fetch(url, {
            method: "POST",
            body: new FormData(formAnios),
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBg = [];
        const colorsBor = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].cantidad);
            colorsBg.push(colors.backgroundColor);
            colorsBor.push(colors.borderColor);
        }
        const newChart = new Chart(ctx5, {
            type: "polarArea",
            data: {
                labels: title,
                datasets: [
                    {
                        label: "# in Stock",
                        data: amount,
                        backgroundColor: colorsBg,
                        borderColor: colorsBor,
                    },
                ],
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const cargarDatosGraficoLineParametros = async () => {
    try {
        const url =
            "./src/controller/graphic.controller.php?action=getGraphicsBarParametro";
        const response = await fetch(url, {
            method: "POST",
            body: new FormData(formAnios),
        });
        const result = await response.json();
        const title = [];
        const amount = [];
        const colorsBor = [];
        for (let i = 0; i < result.length; i++) {
            const colors = colorRandom();
            title.push(result[i].producto_nombre);
            amount.push(result[i].cantidad);
            colorsBor.push(colors.borderColor);
        }
        const newChart = new Chart(ctx6, {
            type: "line",
            data: {
                labels: title,
                datasets: [
                    {
                        label: "# in Stock",
                        data: amount,
                        fill: false,
                        backgroundColor: colorsBor,
                        tension: 0.1,
                    },
                ],
            },
        });
    } catch (error) {
        console.log(error);
    }
};

btnGraficar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarDatosGraficoDouParametros();
    cargarDatosGraficoPolarParametros();
    cargarDatosGraficoLineParametros();
});
