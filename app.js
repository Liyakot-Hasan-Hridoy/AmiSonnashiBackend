const express = require("express");
const app = express();
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

const imageFolderPath = "chapterOne/images";
const audioFolderPath = "chapterOne/audio";

app.use('/images', express.static('chapterOne/images'));
app.use('/audio', express.static('chapterOne/audio'));

app.get("/api/vashaShikkha", (req, res) => {
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

app.listen(process.env.PORT || 3000, () => {
    console.log("Connected to Server PORT " + (process.env.PORT || 3000));
});
