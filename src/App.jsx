import { useState } from "react";
import Card from "./components/card";

const cardContent = [
    {
        image: "https://cdn.discordapp.com/attachments/1008571102328541215/1169967552005406810/gokul0338_photo_of_a_24_year_old_girl_in_yellow_shirt_sitting_i_fa39776c-9890-49e1-b546-c6f2431b192c.png?ex=65575431&is=6544df31&hm=544408ef3425f7a969a560b303c5b15b354daa6d53586ab10fc99806467e3a4b&",
        header: "Master the Art of Remote Internships: Tips for Success",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur ullam, quaerat autem distinctio amet",
    },
    {
        image: "https://cdn.discordapp.com/attachments/1008571102328541215/1169968447275401367/gokul0338_a_happy_man_holding_his_hungarian_passport_with_light_7d851aec-5bc5-45bf-bbfc-2e20c15cdf53.png?ex=65575506&is=6544e006&hm=84d17258b0ad37df113cd7be17d82e92dde62381ff76dbdc3f69491e40057452&",
        header: "The J1 Visa Process Unveiled: Your Comprehensive Step-by-Step Guide",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur ullam,",
    },
    {
        image: "https://cdn.discordapp.com/attachments/1008571102328541215/1169967936270778368/gokul0338_a_HD_real_photo_of_florida_clicked_using_Sony_A7S3_e2d64ead-4597-46f8-8963-3c1ce0c35342.png?ex=6557548c&is=6544df8c&hm=02f9fd8996ca5c733f454bd6670c8e5cc5ae0e7fbe4002b0e5b9fc6aa32ede51&",
        header: "Exploring the Sunshine State of Florida offers a myriad of visit places.",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur ullam,",
    },
];

function App() {
    const [showNext, setShowNext] = useState(false);
    return (
        <div className="container">
            <div className="left">
                <h1>Latest from our Blogs</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus non libero magnam a officia optio illo velit
                </p>
                <label htmlFor="mail">Join to get free updates</label>
                <form>
                    <input
                        type="email"
                        id="mail"
                        name="email"
                        placeholder="Email Address"
                    />
                    <button>Join now</button>
                </form>
            </div>
            <div className="slider">
                <div
                    className="card-container"
                    style={{
                        transform: showNext
                            ? "translateX(-25%)"
                            : "translateX(0)",
                    }}
                >
                    {cardContent.map((content, i) => (
                        <Card
                            image={content.image}
                            content={content.content}
                            header={content.header}
                            key={i}
                        />
                    ))}
                </div>
            </div>
            <div className="slider-control">
                <button
                    onClick={() => setShowNext(false)}
                    style={{ background: !showNext ? "#02245b" : "#919191" }}
                ></button>
                <button
                    onClick={() => setShowNext((prev) => !prev)}
                    style={{ background: showNext ? "#02245b" : "#919191" }}
                ></button>
            </div>
        </div>
    );
}

export default App;
