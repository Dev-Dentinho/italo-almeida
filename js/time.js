
        window.onload = function() {
            const grentime = () => {
                const hour = new Date().getHours();
                let greeting = '';

                if (hour >= 6 && hour < 12) {
                    greeting = 'Bom dia';
                } else if (hour >= 12 && hour < 18) {
                    greeting = 'Boa tarde';
                } else {
                    greeting = 'Boa noite';
                }

                document.getElementById('greeting').innerText = greeting;
            };

            grentime();
        }