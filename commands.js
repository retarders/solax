let processes = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = [
    {
        name: 'process',
        action: (bot, player, args) => {
            if (args.length < 2) return;

            switch (args[1]) {
                case 'stop':
                    if (args.length < 3) return;

                    let process = processes.filter(pr => processes.indexOf(pr) == parseInt(args[2]))[0];

                    if (!process) {
                        bot.chat('> This process does not exist');
                        return;
                    }

                    processes = processes.filter(innerProcesss => process != innerProcesss);
                    clearInterval(process.id);

                    bot.chat(`> Stopping process ${args[2]}`);

                    break;
                case 'list':
                    bot.chat(`> Listing processes ${processes.length}`);

                    processes.forEach(process => {
                        bot.chat(`> - ${processes.indexOf(process)}`);
                        bot.chat(`> ⠀⠀id: ${process.id}`);
                        bot.chat(`> ⠀⠀command: ${process.command}`);
                        bot.chat(`> `);
                    });
                    break;
            }
        }
    },
    {
        name: 'bomb',
        action: (bot, player, args) => {
            if (args.length < 2) return;

            let x = 0;
            let y = 0;
            let z = 0;

            let material = args[1];

            bot.chat(`> Starting process with id of ${processes.length} in 3 seconds`);
            bot.chat(`> To stop this process type "process stop ${processes.length}"`);

            setTimeout(() => {
                let id = setInterval(() => {
                    let cmd = `/setblock ${x} ${y} ${z} minecraft:${material}`;

                    bot.chat(cmd);

                    x = random(0, 10);
                    y = random(200, 255);
                    z = random(0, 10);
                }, 20);

                processes.push({
                    id,
                    command: args.join(' ')
                });
            }, 3000);
        }
    },
    {
        name: 'spam',
        action: (bot, player, args) => {
            if (args.length < 3) return;

            let text = args
                .filter(arg => arg != args[0])
                .filter(arg => arg != args[1])
                .join(' ');

            let delay = parseInt(args[1]);

            bot.chat(`> Starting process with id of ${processes.length} in 3 seconds`);
            bot.chat(`> To stop this process type "process stop ${processes.length}"`);

            setTimeout(() => {
                let id = setInterval(() => bot.chat(text), delay);

                processes.push({
                    id,
                    command: args.join(' ')
                });
            }, 3000);
        }
    }
];