<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gráficos con PHP - Chart.js</title>
    <link rel="shortcut icon" href="./src/img/logo.png" type="image/x-icon">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />
</head>

<body>
    <div class="row justify-content-center m-3">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h2>Gráficos con PHP y Chart.js</h2>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <!-- <button id="btn-bar" class="btn btn-primary">Gráficos Barra</button> -->
                            <canvas id="graficoBar" width="400" height="400"></canvas>
                        </div>

                        <div class="col-md-4">
                            <!-- <button id="btn-bar-hor" class="btn btn-primary">Gráficos Barra Horizontal</button> -->
                            <canvas id="graficoBarHor" width="400" height="400"></canvas>
                        </div>

                        <div class="col-md-4">
                            <canvas id="graficoPie" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 mt-3">
            <div class="card">
                <div class="card-header">
                    <h2>Gráficos con PHP y Chart.js, con parametros</h2>
                </div>
                <div class="card-body">
                    <div class="row">
                        <form id="formAnios" class="row">
                            <div class="col-md-5">
                                <label for="fechaInicio">Seleccione año inicio:</label>
                                <select id="fechaInicio" name="fechaInicio" class="form-select">

                                </select>
                            </div>

                            <div class="col-md-5">
                                <label for="fechaFin">Seleccione año fin:</label>
                                <select id="fechaFin" name="fechaFin" class="form-select">

                                </select>
                            </div>

                            <div class="col-md-2">
                                <label for="btn-graficar">&nbsp;</label><br>
                                <button id="btn-graficar" class="btn btn-primary">Graficar</button>
                            </div>
                        </form>

                        <div class="col-md-4 mt-2">
                            <canvas id="graficoDouParametro" width="400" height="400"></canvas>
                        </div>

                        <div class="col-md-4 mt-2">
                            <!-- <button id="btn-bar" class="btn btn-primary">Gráficos Barra</button> -->
                            <canvas id="graficoPolParametro" width="400" height="400"></canvas>
                        </div>

                        <div class="col-md-4 mt-2">
                            <!-- <button id="btn-bar-hor" class="btn btn-primary">Gráficos Barra Horizontal</button> -->
                            <canvas id="graficoLineParametro" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Chart.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js"></script>
    <!-- Js Extras -->
    <script src="./src/js/app.js"></script>
</body>

</html>