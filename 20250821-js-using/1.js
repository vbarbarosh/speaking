console.clear();
main();

function main()
{
    const file = fopen('file1.txt');
    try {
        // ...
    }
    finally {
        file.dispose();
    }
}

function fopen(path)
{
    return {
        dispose: function () {
            console.log('dispose', path);
        },
    };
}
