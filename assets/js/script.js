        document.addEventListener('DOMContentLoaded', function() {
            const Horas = document.getElementById('horas'); 
            const Minutos = document.getElementById('minutos');
            const Segundos = document.getElementById('segundos'); 
    
            const relogio = setInterval(function time(){
                let dateToday = new Date();
                let hora = dateToday.getHours();
                let minuto = dateToday.getMinutes();
                let segundo = dateToday.getSeconds();
    
                if (hora < 10) hora = '0' + hora;
                if (minuto < 10) minuto = '0' + minuto;
                if (segundo < 10) segundo = '0' + segundo;
    
                Horas.textContent = hora;
                Minutos.textContent = minuto;
                Segundos.textContent = segundo;
    
                
            }, 1000)
        })
      
      
        