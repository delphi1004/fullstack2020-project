export const global = {
  menu: {
    idle:-1,
    about: 0,
    works: 1,
    exhibition: 2,
    cv: 3,
    contact:4
  },
  worksMenu: {
    generativeArt:0,
    interactiveArt: 1,
    modeling: 2,
    software: 3,
  }
}

export const Data_Generative = {
  resourcePath: './images/works',
  words: '“This may sound paradoxical, but the machine, which is thought to be cold and inhuman, can help to realize what is most subjective, unattainable, and profound in a human being.” - Vera Molnar',
  contents: [
    {
      year:2017,
      thumbnailImage: 'soundVis_01',
      contentsImage: [require('../data/images/works/soundVis_01.JPG'), require('../data/images/works/soundVis_02.JPG'), require('../data/images/works/soundVis_03.JPG')],
      title: 'Sound visualisation',
      subTitle: 'This project demonstrates how to convert sound into a physical object',
      descptionTitle:'a shape of \'Hello\' ',
      tool: 'Processing , Maya , Pakakura',
      description: 'The sound is the one of most sensory information for us to recognize what\'s going on the outside world. This audible information is mainly focused on our ears to perceive it. Hence, My question is that what happen if we could feel,see and touch this invisible energy. I mean how can our brain interpret the sound if the sound transformed into other medium. Does it help to listen to a sound? or it interrupts to enjoy listen to a sound? In order to do that, I used processing for sound analysis, Maya for build 3D object and laser cutter for cutting paper.'
    },
    {
      year:2018,
      thumbnailImage: 'shape_01',
      contentsImage: [require('../data/images/works/shape_01.png'), require('../data/images/works/shape_02.png'), require('../data/images/works/shape_03.png') , require('../data/images/works/shape_04.png')],
      title: 'Generative shapes',
      subTitle: 'This project is designed for the expression of name of people.',
      descptionTitle:'a shape of name ',
      tool: 'openFrameworks',
      description: 'This project is designed for the expression of name of people. As we have a unique name and it contains memories, identities, and joyful. Hence, I made a shape generator s/w by using Openframeworks. This s/w analysis people name and it generates very unique shapes related to the names. For instance, the first letter is the key value for the whole color scheme and rest of other letters effect on another visual effect.​'
    },
    {
      year:2020,
      thumbnailImage: 'ganerative_brush_01',
      contentsImage: [require('../data/images/works/ganerative_brush_01.jpg'), require('../data/images/works/ganerative_brush_02.jpg'), require('../data/images/works/ganerative_brush_03.jpg')],
      title: 'Beauty of randomness',
      subTitle: 'I am excited to create an algorithm for a brush and natural colour composition.',
      descptionTitle:'a beauty of randomness ',
      tool: 'processing',
      description: 'I am excited to create an algorithm for a brush and natural colour composition. It is always nice moment when I am waiting for that full rendering is done because there are beauty of randomness.​'
    },
    {
      year:2020,
      thumbnailImage: 'masterthesis_03',
      contentsImage: [require('../data/images/works/masterthesis_01.jpg'), require('../data/images/works/masterthesis_02.jpg'), require('../data/images/works/masterthesis_03.jpg') , require('../data/images/works/masterthesis_04.jpg'), require('../data/images/works/masterthesis_05.jpg')],
      title: 'Seeing sound',
      subTitle: 'This project demonstrates the implementation of working software that integrates music emotion and musical characteristics such as frequency analysis.',
      tool: 'processing',
      descptionTitle:'can you see the music?',
      description: 'Music and visual artwork are a valuable part of our daily life. Since both media induce human emotion, this thesis demonstrates how to convert music into visual artwork such as generative art. Especially, the project shows the method of connecting music emotion to the theme of colour. This thesis describes the human emotional model based on arousal and valence. Also, this thesis explains how colour affects our emotion. In order to connect music emotion into the colour theme, this thesis shows the method to retrieve music information which includes arousal and valence of the music. In order to generate visual artwork from the music, this thesis demonstrates the implementation of working software that integrates music emotion and musical characteristics such as frequency analysis. Besides, this thesis presents how to apply generative artwork into our daily life products..​'
    },
    {
      year:2020,
      thumbnailImage: 'drawingmachine_01',
      contentsImage: [require('../data/images/works/drawingmachine_01.jpg'), require('../data/images/works/drawingmachine_02.jpg'), require('../data/images/works/drawingmachine_03.jpg') , require('../data/images/works/drawingmachine_04.jpg'),require('../data/images/works/drawingmachine_05.jpg'),require('../data/images/works/drawingmachine_06.jpg')],
      title: 'Drawing machine',
      subTitle: 'Dawing machine expressed a morse code (ex:LOVE) as visual aspect.',
      tool: 'Arduino , Stepper motors , Sensors, Servo motors',
      descptionTitle:'.-.. --- ...- .',
      description: 'This project is designed for new type of drawing machine which can draw curves and lines naturally. Morse code is one of significant code to communicate each other. So, the drawing machine will express Some Morse code(ex:LOVE) as visual aspect.'
    },
  ]
}

export const Data_Interactive = {
  resourcePath: './images/works',
  contents: [
    {
      thumbnailImage: 'handtracking_01',
      contentsImage: ['handtracking_01', 'handtracking_02', 'handtracking_02'],
      title: 'Projection mapping',
      subTitle: 'What happens if I can control a light?',
      tool: 'Processing , openCV , Kinect sensor',
      description: 'What happens if I can control a light? I created an interactive projection mapping system which could detect my palm position in 3D space. All the lights would rush to my palm like I am the center of the universe. In order to do that, I just used a projector and kinect sensor to detect the palm position.'
    },
    {
      thumbnailImage: 'game_controller_01',
      contentsImage: ['game_controller_01', 'game_controller_02', 'game_controller_03'],
      title: 'Game controller',
      subTitle: 'what if the game controller becomes an uncomfortable thing to play the game?',
      tool: 'Arduino , Rotary sensors , Processing',
      description: 'The project name is “Game Together!” In modern society, the computer game has been growing hugely. Related in this industry, we can find many different types of a game controller such as a keyboard, Nintendo Wii, X-box controller etc. these controllers are well designed for one person to control their character in the game. It is handy and efficient. what happens if the game controller becomes an uncomfortable thing to play the game? what happens if only two people should co-work together to play a game? is it good for their relationship? or not?. Hence I designed a game controller which has a button and wheel on a box. So one controller only related in to move x-axis, and other is related in y-axis only. People should turn the wheels to move a character and archive the goal. I just want to give people new experience which is quite different than the conventional game controller.'
    },
    {
      thumbnailImage: 'aqua_07',
      contentsImage: ['aqua_01', 'aqua_02', 'aqua_03','aqua_04'],
      title: 'Digital aquarium',
      subTitle: 'Aquarium project for Helsinki children\'s hospital',
      tool: 'Arduino , Rotary sensors , Processing',
      description: 'The project name is “Game Together!” In modern society, the computer game has been growing hugely. Related in this industry, we can find many different types of a game controller such as a keyboard, Nintendo Wii, X-box controller etc. these controllers are well designed for one person to control their character in the game. It is handy and efficient. what happens if the game controller becomes an uncomfortable thing to play the game? what happens if only two people should co-work together to play a game? is it good for their relationship? or not?. Hence I designed a game controller which has a button and wheel on a box. So one controller only related in to move x-axis, and other is related in y-axis only. People should turn the wheels to move a character and archive the goal. I just want to give people new experience which is quite different than the conventional game controller.'
    },
  ]
}

export const Data_WorksMenu_Generative = {
  contents: [
    {
      id:global.worksMenu.generativeArt,
      title: 'GENERATIVE  ART',
      titleImage:require('../data/images/works/thumbnail_ganerative_brush_01.png'),
      description: '“This may sound paradoxical, but the machine, which is thought to be cold and inhuman, can help to realize what is most subjective, unattainable, and profound in a human being.” - Vera Molnar',
      author: 'Vera Molnar',
      backgroundColor: '#bf8726',
      extraDescription: 'Processing openFrameworks Arduino'
    },
    {
      id:global.worksMenu.interactiveArt,
      title: 'INTERACTIVE ART',
      titleImage:require('../data/images/works/thumbnail_interactive_01.png'),
      description: '“If our child doesn’t have time to finish a fish before an appointment, it’s certain that we won’t be leaving the building before the fish is in the aquarium.” - from Helsinki’s New Children’s Hospital',
      author: 'Vera Molnar',
      backgroundColor: '#bfa126',
      extraDescription: 'Processing openFrameworks Arduino OpenCV Kinect sensor'
    },
    {
      id:global.worksMenu.modeling,
      title: '3D MODELING',
      titleImage:require('../data/images/works/thumbnail_3dmodeling_12.png'),
      description: '“Fusion 360 is my favorite 3D modeling tool.”',
      author: 'Vera Molnar',
      backgroundColor: '#bfba26',
      extraDescription: 'Fusion 360 Maya'
    },
    {
      id:global.worksMenu.software,
      title: 'SOFTWARE',
      titleImage:require('../data/images/works/thumbnail_software_01.png'),
      description: '“Software architecture design is similar to design a city.”',
      author: 'Vera Molnar',
      backgroundColor: '#abbf26',
      extraDescription: 'Objective-C Swift JavaScript React C C++ C# Node.js'
    }
  ],
  data: Data_Generative
}