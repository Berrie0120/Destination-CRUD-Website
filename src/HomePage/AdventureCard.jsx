import React from 'react'
import Card from './Card.jsx'
import fishingPic from '../assets/cayleylodge-fishing.jpg'
import enjoyingPic from '../assets/cayleylodge-amarula.jpg'
import hikingPic from '../assets/cayleylodge-hiking.jpg'
import quadBikePic from '../assets/cayleylodge-quadBike.jpg'
import chessPic from '../assets/cayleylodge-chess.jpg'
import milkshakePic from '../assets/cayleylodge-milkshake.jpg'
import putputPic from '../assets/cayleylodge-putput.jpg'
import waterparkPic from '../assets/cayleylodge-waterpark.jpg'
import swimPic from '../assets/cayleylodge-swim.jpg'

function AdventureCard(){
    const adventureCardsData = [
        {    
            card_image: fishingPic,
            card_title: "Fishing",
            card_text: "In the early morn by waters deep,\nA fisherman casts, his secrets to keep.\nWith whispers of wind, and a gentle stream's song,\nHe weaves his tales as he fishes along.\n\nThe rod bends, a dance of nature's grace,\nSilhouette against the sunrise, an angler's embrace.\nReflections ripple, stories untold,\nIn the heart of the river, where dreams unfold.\n\nThe lull of the waves, a soothing refrain,\nA dance with patience, a fisherman's gain.\nBobber and bait, in tandem they sway,\nIn the quiet pursuit of a finned ballet.\n\nThe tug on the line, a thrilling delight,\nA battle of wills, in the soft morning light.\nWith skill and with luck, the catch of the day,\nA tale for the ages, as shadows give way.\n\nOn the riverbank, under the sky's soft hue,\nA fisherman smiles, his heart pure and true.\nFor in the art of fishing, a connection is found,\nTo nature's rhythm, in quiet, profound.",
        },
        {    
            card_image: enjoyingPic,
            card_title: "Enjoying",
            card_text: "Beneath the sun's warm, golden embrace,\nIn moments sweet, we find our space.\nWith laughter's dance and friendships near,\nTime stands still, no need for fear.\n\nWhispers of joy in the gentle breeze,\nCherished moments, like falling leaves.\nIn the tapestry of now, we weave,\nEmbracing each moment, in which we believe.\n\nThe world may whirl, in a constant spin,\nYet here we linger, hearts within.\nSavoring the now, with open hearts,\nA symphony of life, where every note imparts.\n\nSo let us revel, in the present's glow,\nWhere happiness flows, and memories grow.\nIn the canvas of time, our stories unfold,\nEnjoying the moment, a treasure untold.",
        },
        {   
            card_image: hikingPic,
            card_title: "Hiking",
            card_text: "Up the trail, where the mountains kiss the sky,\nHiking boots crunch on the path, as time goes by.\nThrough whispering pines and rustling leaves,\nA journey unfolds, beneath the forest eaves.\n\nSteep ascents and valleys deep,\nNature's secrets, in every step we keep.\nThe sun peers through the emerald canopy,\nA symphony of footsteps, a hiker's melody.\n\nMajestic peaks, touched by the dawn's first light,\nA vista unfolds, a breathtaking sight.\nIn the heart of nature, where the air is clear,\nAdventure whispers, removing all fear.\n\nRocky trails and babbling brooks,\nNature's wonders found in hidden nooks.\nThe summit awaits, a triumph near,\nA hiker's reward, a view sincere.\n\nSo lace up your boots, and venture with glee,\nHiking trails, where the wild and free roam free.\nIn the great outdoors, under the open sky,\nA hiker's soul soars, reaching new highs.",
        },
        {
            card_image: quadBikePic,
            card_title: "Quad Bikes",
            card_text: "Vrooming through the mud, feeling quite absurd,\nOn a quad bike adventure, like a goofy bird.\nHandlebars in hand, wind messing up my hair,\nQuad bike escapades, without a single care.\n\nDirt and giggles flying, as we hit the trail,\nQuad bike waltz, through the silly dale.\nRocks and bumps become a bouncy dance,\nQuad bike humor, leaving nothing to chance.\n\nHooting like an owl, on this four-wheeled spree,\nQuad bike whimsy, the silliest kind of glee.\nThrough puddles and potholes, we gleefully splash,\nQuad bike laughter, a delightful bash.\n\nNo need for speed records or a serious face,\nJust quad bike shenanigans, all over the place.\nGiggles and grins, as we zig and zag,\nQuad bike madness, waving the silly flag.\n\nSo hop on the seat, let the joy begin,\nQuad bike silliness, a ride that's pure win!\nOn this goofy journey, where laughter abides,\nQuad bike fun, in silly strides.",
        },
        {   
            card_image: chessPic,
            card_title: "Chess",
            card_text: "On a checkered board, a whimsical chance,\nChess pieces twirl in a silly dance.\nBishops in tutus, knights doing the moonwalk,\nA chess game where laughter is the talk.\n\nThe king and queen in a tango embrace,\nPawns doing cartwheels with elegance and grace.\nRooks breakdancing, creating a stir,\nChessboard antics, a delightful blur.\n\nCheckmate declared with a rubber chicken squawk,\nSilly chess moves, an unorthodox walk.\nPawn promotion involves a disco ball,\nIn the whimsical realm where chess pieces fall.\n\nStrategic plans met with giggles and glee,\nChessboard chaos, a jubilant spree.\nA roving jester, the chessboard's guide,\nTickling the funny bone on every side.\n\nSo play the game with a joyous heart,\nIn the realm of chess, where silliness is an art.\nA whimsical match, a laughter-filled prance,\nIn the world of chess, a silly dance!",
        },
        {   
            card_image: milkshakePic,
            card_title: "Restaurant",
            card_text: "In a frosty glass, a creamy delight,\nA milkshake magic, pure and bright.\nChocolates and berries, a swirl so divine,\nSipping sweet joy, with every sip in line.\n\nVanilla clouds and caramel dreams,\nIn the land of milkshakes, where sweetness gleams.\nStrawberry fields and banana boat rides,\nA symphony of flavors, dancing by our sides.\n\nWhipped cream mountains, a cherry on top,\nMilkshake elation, a sugary hop.\nThrough the straw, a blissful cascade,\nIn the milkshake haven, where worries fade.\n\nTropical breezes in a pineapple haze,\nMilkshake paradise, a dreamy phase.\nChocolate rivers and cookie crumb shores,\nIn the universe of milkshakes, fun never bores.\n\nSo clink those glasses, let laughter chime,\nMilkshake moments, a taste so sublime.\nIn the carnival of flavors, where joy takes the lead,\nSweet milkshake memories, oh what a treat!",
        },
        {   
            card_image: putputPic,
            card_title: "Put-Put",
            card_text: "Grab a colorful ball, and a tiny club too,\nTo the putt-putt wonderland, let's all pursue.\nWindmills twirling with a silly grin,\nIn this mini-golf world, where fun begins.\n\nThe first hole awaits, a challenge so small,\nBut watch out for the ramp, it might eat your ball!\nThrough loops and bends, with laughter as our guide,\nIn the whimsical world of putt-putt, let's abide.\n\nGiraffes and elephants guard the greens,\nSilly obstacles, the quirkiest scenes.\nBouncing balls on bridges, a goofy delight,\nIn the putt-putt kingdom, where joy takes flight.\n\nUnderneath rainbows and through tunnels we go,\nIn this mini-golf journey, with a rhythmic flow.\nA hole in one, or a comical miss,\nPutt-putt smiles, pure golfing bliss.\n\nSo swing your club with a gleeful cheer,\nIn the world of putt-putt, where happiness is near.\nA silly adventure, under the sun,\nPutt-putt joy, for everyone!",
        },
        {   
            card_image: waterparkPic,
            card_title: "Water Park",
            card_text: "In a dam so vast, a secret's afloat,\nA whimsical course, a damsel's gloat.\nRubber ducks in a synchronized dance,\nA floating frolic, a giggle-enhanced.\n\nGiant inflatable turtles playing tag,\nQuacky companions on a buoyant zigzag.\nSkipping stones with a splashy surprise,\nDamsels and ducks, no need for ties.\n\nWacky bridges of jellybean beams,\nBubble-wrap clouds and candy dreams.\nLaughter echoes on the water's edge,\nDamsels on floats, a giggly pledge.\n\nDucklings racing in a silly pursuit,\nGoggles on, avoiding a splashy dispute.\nWhirlpools of laughter, a goofy chance,\nIn the dam's delight, a silly dance.\n\nSo grab a noodle, let's set sail,\nOn this floating escapade, a damsel's tale.\nIn this watery wonder, where giggles roar,\nDamsel's giggle galore, forevermore!",
        },
        {   
            card_image: swimPic,
            card_title: "Swimming Pool",
            card_text: "In the swimming pool, where laughter flows,\nAqua antics, where the humor grows.\nRubber duck comedians, telling quacks,\nA poolside comedy, no need for snacks.\n\nFroggy stand-up with a croaky punch,\nBelly flop contests, creating a bunch.\nInflatable giraffes doing the limbo low,\nA poolside giggle, a watery show.\n\nSynchronized splashes, a goofy parade,\nGoggles with googly eyes, a funny charade.\nBanana peel slides for a slippery thrill,\nIn the pool of chuckles, time to chill.\n\nPenguin lifeguards on a whistle spree,\nWhale songs echoing, a melodious sea.\nTurtles racing, a slow-motion race,\nIn the poolside circus, laughter takes place.\n\nSo grab your floatie, join the pun,\nIn this funny poolside aqua fun.\nWith belly laughs and a whimsical splash,\nAqua antics extravaganza, a poolside bash!",
        },
    ];

    return (
        <ul className='horizontal-card-list'>
                    {adventureCardsData.map((card, index) => (
                <li key={index}>
                    <Card
                        card_image ={card.card_image}
                        card_title ={card.card_title}
                        card_text ={card.card_text}
                    />
                </li>
            ))}
        </ul>
    );
}

export default AdventureCard