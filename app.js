const express = require("express");
const app = express();
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

const imageFolderPath = "chapterOne/images";
const audioFolderPath = "chapterOne/audio";


const imageFolderPath2 = "chapterTwo/images";
const audioFolderPath2 = "chapterTwo/audio";


const imageFolderPath3 = "chapterThree/images";
const audioFolderPath3 = "chapterThree/audio";


const imageFolderPath4 = "chapterFour/images";
const audioFolderPath4 = "chapterFour/audio";

const imageFolderPath5 = "chapterFive/images";
const audioFolderPath5 = "chapterFive/audio";

const imageFolderPath6 = "chapterSix/images";
const audioFolderPath6 = "chapterSix/audio";

const imageFolderPath7 = "chapterSeven/images";
const audioFolderPath7 = "chapterSeven/audio";


const imageFolderPath8 = "chapter8/images";
const audioFolderPath8 = "chapter8/audio";


const imageFolderPath9 = "chapter9/images";
const audioFolderPath9 = "chapter9/audio";


const imageFolderPath10 = "chapter10/images";
const audioFolderPath10 = "chapter10/audio";


const imageFolderPath11 = "chapter11/images";
const audioFolderPath11 = "chapter11/audio";


const imageFolderPath12 = "chapter12/images";
const audioFolderPath12 = "chapter12/audio";

const imageFolderPath13 = "chapter13/images";
const audioFolderPath13 = "chapter13/audio";


const imageFolderPath14 = "chapter14/images";
const audioFolderPath14 = "chapter14/audio";


const imageFolderPath15 = "chapter15/images";
const audioFolderPath15 = "chapter15/audio";

const imageFolderPath16 = "chapter16/images";
const audioFolderPath16 = "chapter16/audio";

const imageFolderPath17 = "chapter17/images";
const audioFolderPath17 = "chapter17/audio";

const imageFolderPath18 = "chapter18/images";
const audioFolderPath18 = "chapter18/audio";

const imageFolderPath19 = "chapter19/images";
const audioFolderPath19 = "chapter19/audio";


const imageFolderPath20 = "chapter20/images";
const audioFolderPath20 = "chapter20/audio";

const imageFolderPath21 = "chapter21/images";
const audioFolderPath21 = "chapter21/audio";

const imageFolderPath22 = "chapter22/images";
const audioFolderPath22 = "chapter22/audio";

const imageFolderPath23 = "chapter23/images";
const audioFolderPath23 = "chapter23/audio";

const imageFolderPath24 = "chapter24/images";
const audioFolderPath24 = "chapter24/audio";

const imageFolderPath25 = "chapter25/images";
const audioFolderPath25 = "chapter25/audio";

const imageFolderPath26 = "chapter26/images";
const audioFolderPath26 = "chapter26/audio";


const imageFolderPath27 = "chapter27/images";
const audioFolderPath27 = "chapter27/audio";

const imageFolderPath28 = "chapter28/images";
const audioFolderPath28 = "chapter28/audio";

const imageFolderPath29 = "chapter29/images";
const audioFolderPath29 = "chapter29/audio";

const imageFolderPath30 = "chapter30/images";
const audioFolderPath30 = "chapter30/audio";

const imageFolderPath31 = "chapter31/images";
const audioFolderPath31 = "chapter31/audio";

const imageFolderPath32 = "chapter32/images";
const audioFolderPath32 = "chapter32/audio";

const imageFolderPath33 = "chapter33/images";
const audioFolderPath33 = "chapter33/audio";

const imageFolderPath34 = "chapter34/images";
const audioFolderPath34 = "chapter34/audio";

const imageFolderPath35 = "chapter35/images";
const audioFolderPath35 = "chapter35/audio";

const imageFolderPath36 = "chapter36/images";
const audioFolderPath36 = "chapter36/audio";

const imageFolderPath37 = "chapter37/images";
const audioFolderPath37 = "chapter37/audio";

const imageFolderPath38 = "chapter38/images";
const audioFolderPath38 = "chapter38/audio";

const imageFolderPath39 = "chapter39/images";
const audioFolderPath39 = "chapter39/audio";

const imageFolderPath40 = "chapter40/images";
const audioFolderPath40 = "chapter40/audio";

const imageFolderPath41 = "chapter41/images";
const audioFolderPath41 = "chapter41/audio";

const imageFolderPath42 = "chapter42/images";
const audioFolderPath42 = "chapter42/audio";

const imageFolderPath43 = "chapter43/images";
const audioFolderPath43 = "chapter43/audio";

const imageFolderPath44 = "chapter44/images";
const audioFolderPath44 = "chapter44/audio";

const imageFolderPath45 = "chapter45/images";
const audioFolderPath45 = "chapter45/audio";

const imageFolderPath46 = "chapter46/images";
const audioFolderPath46 = "chapter46/audio";

const imageFolderPath47 = "myTalk/images";

// Chapter One..
app.use('/images', express.static('chapterOne/images'));
app.use('/audio', express.static('chapterOne/audio'));

// Chapter Two
app.use('/images', express.static('chapterTwo/images'));
app.use('/audio', express.static('chapterTwo/audio'));

// Chapter Three
app.use('/images', express.static('chapterThree/images'));
app.use('/audio', express.static('chapterThree/audio'));

// Chapter Four
app.use('/images', express.static('chapterFour/images'));
app.use('/audio', express.static('chapterFour/audio'));


// Chapter Five
app.use('/images', express.static('chapterFive/images'));
app.use('/audio', express.static('chapterFive/audio'));

// Chapter Six
app.use('/images', express.static('chapterSix/images'));
app.use('/audio', express.static('chapterSix/audio'));

// Chapter Seven
app.use('/images', express.static('chapterSeven/images'));
app.use('/audio', express.static('chapterSeven/audio'));


// Chapter Eight
app.use('/images', express.static('chapter8/images'));
app.use('/audio', express.static('chapter8/audio'));


// Chapter Nine
app.use('/images', express.static('chapter9/images'));
app.use('/audio', express.static('chapter9/audio'));

app.use('/images', express.static('chapter10/images'));
app.use('/audio', express.static('chapter10/audio'));

app.use('/images', express.static('chapter11/images'));
app.use('/audio', express.static('chapter11/audio'));


app.use('/images', express.static('chapter12/images'));
app.use('/audio', express.static('chapter12/audio'));

app.use('/images', express.static('chapter13/images'));
app.use('/audio', express.static('chapter13/audio'));

app.use('/images', express.static('chapter14/images'));
app.use('/audio', express.static('chapter14/audio'));

app.use('/images', express.static('chapter15/images'));
app.use('/audio', express.static('chapter15/audio'));

app.use('/images', express.static('chapter16/images'));
app.use('/audio', express.static('chapter16/audio'));

app.use('/images', express.static('chapter17/images'));
app.use('/audio', express.static('chapter17/audio'));


app.use('/images', express.static('chapter18/images'));
app.use('/audio', express.static('chapter18/audio'));


app.use('/images', express.static('chapter19/images'));
app.use('/audio', express.static('chapter19/audio'));


app.use('/images', express.static('chapter20/images'));
app.use('/audio', express.static('chapter20/audio'));

app.use('/images', express.static('chapter21/images'));
app.use('/audio', express.static('chapter21/audio'));

app.use('/images', express.static('chapter22/images'));
app.use('/audio', express.static('chapter22/audio'));

app.use('/images', express.static('chapter23/images'));
app.use('/audio', express.static('chapter23/audio'));

app.use('/images', express.static('chapter24/images'));
app.use('/audio', express.static('chapter24/audio'));

app.use('/images', express.static('chapter25/images'));
app.use('/audio', express.static('chapter25/audio'));


app.use('/images', express.static('chapter26/images'));
app.use('/audio', express.static('chapter26/audio'));


app.use('/images', express.static('chapter27/images'));
app.use('/audio', express.static('chapter27/audio'));


app.use('/images', express.static('chapter28/images'));
app.use('/audio', express.static('chapter28/audio'));

app.use('/images', express.static('chapter29/images'));
app.use('/audio', express.static('chapter29/audio'));

app.use('/images', express.static('chapter30/images'));
app.use('/audio', express.static('chapter30/audio'));

app.use('/images', express.static('chapter31/images'));
app.use('/audio', express.static('chapter31/audio'));

app.use('/images', express.static('chapter32/images'));
app.use('/audio', express.static('chapter32/audio'));

app.use('/images', express.static('chapter33/images'));
app.use('/audio', express.static('chapter33/audio'));


app.use('/images', express.static('chapter34/images'));
app.use('/audio', express.static('chapter34/audio'));

app.use('/images', express.static('chapter35/images'));
app.use('/audio', express.static('chapter35/audio'));

app.use('/images', express.static('chapter36/images'));
app.use('/audio', express.static('chapter36/audio'));

app.use('/images', express.static('chapter37/images'));
app.use('/audio', express.static('chapter37/audio'));

app.use('/images', express.static('chapter38/images'));
app.use('/audio', express.static('chapter38/audio'));


app.use('/images', express.static('chapter39/images'));
app.use('/audio', express.static('chapter39/audio'));


app.use('/images', express.static('chapter40/images'));
app.use('/audio', express.static('chapter40/audio'));


app.use('/images', express.static('chapter41/images'));
app.use('/audio', express.static('chapter41/audio'));

app.use('/images', express.static('chapter42/images'));
app.use('/audio', express.static('chapter42/audio'));

app.use('/images', express.static('chapter43/images'));
app.use('/audio', express.static('chapter43/audio'));

app.use('/images', express.static('chapter44/images'));
app.use('/audio', express.static('chapter44/audio'));

app.use('/images', express.static('chapter45/images'));
app.use('/audio', express.static('chapter45/audio'));

app.use('/images', express.static('chapter46/images'));
app.use('/audio', express.static('chapter46/audio'));


app.use('/images', express.static('myTalk/images'));


app.get("/api/chapter1", (req, res) => {
    const chapterOne = [];

    fs.readdir(imageFolderPath, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterOne.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterOne });
        });
    });
});


app.get("/api/chapter2", (req, res) => {
    const chapterTwo = [];

    fs.readdir(imageFolderPath2, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath2, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwo.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwo });
        });
    });
});


app.get("/api/chapter3", (req, res) => {
    const chapterthree = [];

    fs.readdir(imageFolderPath3, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath3, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterthree.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterthree });
        });
    });
});



app.get("/api/chapter4", (req, res) => {
    const chapterFour = [];

    fs.readdir(imageFolderPath4, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath4, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFour.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFour });
        });
    });
});




app.get("/api/chapter5", (req, res) => {
    const chapterFive = [];

    fs.readdir(imageFolderPath5, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath5, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFive.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFive });
        });
    });
});


app.get("/api/chapter6", (req, res) => {
    const chapterSix = [];

    fs.readdir(imageFolderPath6, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath6, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterSix.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterSix });
        });
    });
});


app.get("/api/chapter7", (req, res) => {
    const chapterSeven = [];

    fs.readdir(imageFolderPath7, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath7, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterSeven.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterSeven });
        });
    });
});

app.get("/api/chapter8", (req, res) => {
    const chapterEight = [];

    fs.readdir(imageFolderPath8, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath8, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterEight.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterEight });
        });
    });
});

app.get("/api/chapter9", (req, res) => {
    const chapterNine = [];

    fs.readdir(imageFolderPath9, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath9, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterNine.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterNine });
        });
    });
});

app.get("/api/chapter10", (req, res) => {
    const chapterten = [];

    fs.readdir(imageFolderPath10, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath10, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterten.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterten });
        });
    });
});

app.get("/api/chapter11", (req, res) => {
    const chapterEleven = [];

    fs.readdir(imageFolderPath11, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath11, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterEleven.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterEleven });
        });
    });
});

app.get("/api/chapter12", (req, res) => {
    const chapterTwelve = [];

    fs.readdir(imageFolderPath12, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath12, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwelve.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwelve });
        });
    });
});

app.get("/api/chapter13", (req, res) => {
    const chapterThirteen = [];

    fs.readdir(imageFolderPath13, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath13, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirteen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirteen });
        });
    });
});


app.get("/api/chapter14", (req, res) => {
    const chapterFourteen = [];

    fs.readdir(imageFolderPath14, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath14, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourteen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourteen });
        });
    });
});


app.get("/api/chapter15", (req, res) => {
    const chapterFifteen = [];

    fs.readdir(imageFolderPath15, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath15, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFifteen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFifteen });
        });
    });
});

app.get("/api/chapter16", (req, res) => {
    const chapterSixteen = [];

    fs.readdir(imageFolderPath16, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath16, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterSixteen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterSixteen });
        });
    });
});

app.get("/api/chapter17", (req, res) => {
    const chapterSevenTeen = [];

    fs.readdir(imageFolderPath17, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath17, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterSevenTeen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterSevenTeen });
        });
    });
});

app.get("/api/chapter18", (req, res) => {
    const chapterEightTeen = [];

    fs.readdir(imageFolderPath18, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath18, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterEightTeen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterEightTeen });
        });
    });
});

app.get("/api/chapter19", (req, res) => {
    const chapterNineTeen = [];

    fs.readdir(imageFolderPath19, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath19, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterNineTeen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterNineTeen });
        });
    });
});



app.get("/api/chapter20", (req, res) => {
    const chapterTwenty = [];

    fs.readdir(imageFolderPath20, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath20, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwenty.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwenty });
        });
    });
});


app.get("/api/chapter21", (req, res) => {
    const chapterTwentyOne = [];

    fs.readdir(imageFolderPath21, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath21, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyOne.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyOne });
        });
    });
});

app.get("/api/chapter22", (req, res) => {
    const chapterTwentyTwo = [];

    fs.readdir(imageFolderPath22, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath22, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyTwo.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyTwo });
        });
    });
});

app.get("/api/chapter23", (req, res) => {
    const chapterTwentyThree = [];

    fs.readdir(imageFolderPath23, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath23, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyThree.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyThree });
        });
    });
});

app.get("/api/chapter24", (req, res) => {
    const chapterTwentyFour = [];

    fs.readdir(imageFolderPath24, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath24, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyFour.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyFour });
        });
    });
});

app.get("/api/chapter25", (req, res) => {
    const chapterTwentyFive = [];

    fs.readdir(imageFolderPath25, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath25, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyFive.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyFive });
        });
    });
});

app.get("/api/chapter26", (req, res) => {
    const chapterTwentySix = [];

    fs.readdir(imageFolderPath26, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath26, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentySix.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentySix });
        });
    });
});

app.get("/api/chapter27", (req, res) => {
    const chapterTwentySeven = [];

    fs.readdir(imageFolderPath27, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath27, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentySeven.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentySeven });
        });
    });
});

app.get("/api/chapter28", (req, res) => {
    const chapterTwentyEight = [];

    fs.readdir(imageFolderPath28, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath28, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyEight.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyEight });
        });
    });
});

app.get("/api/chapter29", (req, res) => {
    const chapterTwentyNine = [];

    fs.readdir(imageFolderPath29, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath29, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterTwentyNine.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterTwentyNine });
        });
    });
});


app.get("/api/chapter30", (req, res) => {
    const chapterThirTeen = [];

    fs.readdir(imageFolderPath30, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath30, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirTeen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirTeen });
        });
    });
});

app.get("/api/chapter31", (req, res) => {
    const chapterThirtyOne = [];

    fs.readdir(imageFolderPath31, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath31, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyOne.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyOne });
        });
    });
});

app.get("/api/chapter32", (req, res) => {
    const chapterThirtyTwo = [];

    fs.readdir(imageFolderPath32, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath32, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyTwo.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyTwo });
        });
    });
});

app.get("/api/chapter33", (req, res) => {
    const chapterThirtyThree = [];

    fs.readdir(imageFolderPath33, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath33, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyThree.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyThree });
        });
    });
});


app.get("/api/chapter34", (req, res) => {
    const chapterThirtyFour = [];

    fs.readdir(imageFolderPath34, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath34, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyFour.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyFour });
        });
    });
});


app.get("/api/chapter35", (req, res) => {
    const chapterThirtyFive = [];

    fs.readdir(imageFolderPath35, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath35, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyFive.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyFive });
        });
    });
});

app.get("/api/chapter36", (req, res) => {
    const chapterThirtySix = [];

    fs.readdir(imageFolderPath36, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath36, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtySix.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtySix });
        });
    });
});


app.get("/api/chapter37", (req, res) => {
    const chapterThirtySeven = [];

    fs.readdir(imageFolderPath37, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath37, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtySeven.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtySeven });
        });
    });
});

app.get("/api/chapter38", (req, res) => {
    const chapterThirtyEight = [];

    fs.readdir(imageFolderPath38, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath38, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyEight.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyEight });
        });
    });
});

app.get("/api/chapter39", (req, res) => {
    const chapterThirtyNine = [];

    fs.readdir(imageFolderPath39, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath39, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterThirtyNine.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterThirtyNine });
        });
    });
});

app.get("/api/chapter40", (req, res) => {
    const chapterFourtyeen = [];

    fs.readdir(imageFolderPath40, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath40, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyeen.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyeen });
        });
    });
});


app.get("/api/chapter41", (req, res) => {
    const chapterFourtyOne = [];

    fs.readdir(imageFolderPath41, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath41, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyOne.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyOne });
        });
    });
});



app.get("/api/chapter42", (req, res) => {
    const chapterFourtyTwo = [];

    fs.readdir(imageFolderPath42, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath42, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyTwo.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyTwo });
        });
    });
});

app.get("/api/chapter43", (req, res) => {
    const chapterFourtyThree = [];

    fs.readdir(imageFolderPath43, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath43, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyThree.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyThree });
        });
    });
});

app.get("/api/chapter44", (req, res) => {
    const chapterFourtyFour = [];

    fs.readdir(imageFolderPath44, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath44, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyFour.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyFour });
        });
    });
});

app.get("/api/chapter45", (req, res) => {
    const chapterFourtyFive = [];

    fs.readdir(imageFolderPath45, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath45, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtyFive.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtyFive });
        });
    });
});

app.get("/api/chapter46", (req, res) => {
    const chapterFourtySix = [];

    fs.readdir(imageFolderPath46, (err, imageFiles) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const images = imageFiles.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        fs.readdir(audioFolderPath46, (err, audioFiles) => {
            if (err) {
                console.error("Error reading audio files:", err);
                return res.status(500).send("Internal Server Error");
            }

            const audios = audioFiles.filter(file => {
                const lowerCaseFile = file.toLowerCase();
                return (
                    lowerCaseFile.endsWith(".mp3") ||
                    lowerCaseFile.endsWith(".wav") ||
                    lowerCaseFile.endsWith(".ogg") ||
                    lowerCaseFile.endsWith(".aac")
                );
            });

            for (let i = 0; i < Math.max(images.length, audios.length); i++) {
                const imageFile = images[i] || "";
                const audioFile = audios[i] || "";

                chapterFourtySix.push({
                    id: i + 1,
                    imageUrl: imageFile ? `${req.protocol}://${req.get('host')}/images/${imageFile}` : "",
                    audioUrl: audioFile ? `${req.protocol}://${req.get('host')}/audio/${audioFile}` : ""
                });
            }

            res.json({ chapterFourtySix });
        });
    });
});


app.get("/api/myTalk", (req, res) => {
    fs.readdir(imageFolderPath47, (err, files) => {
        if (err) {
            console.error("Error reading image files:", err);
            return res.status(500).send("Internal Server Error");
        }

        const imageFiles = files.filter(file => {
            const lowerCaseFile = file.toLowerCase();
            return (
                lowerCaseFile.endsWith(".jpg") ||
                lowerCaseFile.endsWith(".jpeg") ||
                lowerCaseFile.endsWith(".png") ||
                lowerCaseFile.endsWith(".gif")
            );
        });

        const imageUrls = imageFiles.map(file => {
            return `${req.protocol}://${req.get('host')}/images/${file}`;
        });

        res.json({ myTalk: imageUrls });
    });
});



app.listen(process.env.PORT || 3000, () => {
    console.log("Connected to Server PORT " + (process.env.PORT || 3000));
});
