
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("alerta").addEventListener("click", alerta, false);
document.getElementById("confirmacao").addEventListener("click", confirmacao, false);
document.getElementById("PromptEndereco").addEventListener("click", PromptEndereco, false);
document.getElementById("AlertaSom").addEventListener("click", AlertaSom, false);
document.getElementById("Vibrar").addEventListener("click", Vibrar, false);


function alerta() {
    navigator.notification.alert(
        'Mensagem do alerta!',
        function(){},
        'Título do alerta',
        'Fechar'
    );
}


function confirmacao() {
    navigator.notification.confirm(
        'Deseja executar a ação?',
         RespostaSim,
        'Pergunta',
        ['Sim','Não', 'Talvez']
    );
}

function RespostaSim(botao){
    if (botao == 1)
    navigator.notification.alert('Ação executada!', function(){}, 'Sucesso', 'Fechar');
}

function PromptEndereco() {
  navigator.notification.prompt(
      'Digite seu endereço',
      onPrompPress,
      'Endereço',
      ['Ok','Cancelar'],
      'Av. Paulista - 100'
  );
}

function onPrompPress(resultado) {
    navigator.notification.alert(
        "Você apertou o botão com índice " + resultado.buttonIndex + " você digitou " + resultado.input1,
        function(){},
        'Confirmação Prompt',
        'Fechar'
    );
}

function AlertaSom() {
    navigator.notification.beep(3);
}


function Vibrar() {
    navigator.vibrate(2000);
}
