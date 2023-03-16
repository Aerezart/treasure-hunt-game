import { useDispatch } from 'react-redux';
import { gameActions } from './gameSlice';



export const gameContent = [
    {
        id:1,
        type: 'empty',
        description: 'Let\'s start our journey!'
    },
    {
        id:2,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:3,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:4,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:5,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:6,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue',
        questionType: 'text',
        question: 'What has a heart that doesn\'t beat, a mouth that doesn\'t speak, and a golden head?',
        options: [
            {
                optionText: 'A statue',
                isCorrect: true
            },
            {
                optionText: 'A crown',
                isCorrect: false
            },
            {
                optionText: 'A key',
                isCorrect: false
            },
            {
                optionText: 'A mirror',
                isCorrect: false
            }
        ]
    },
    {
        id:7,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:8,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:9,
        type: 'path_reveal',
        description: 'Ypu\'ve found a map with a shortcut',
    },
    {
        id:10,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:11,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:12,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:13,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:14,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:15,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:16,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:17,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:18,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:19,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:20,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Return to the start and take a new one',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(1))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:21,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:22,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:23,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:24,
        type: 'path_reveal',
        description: 'Ypu\'ve found a map with a shortcut',
    },
    {
        id:25,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:26,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:27,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:28,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:29,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:30,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:31,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:32,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:33,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:34,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:35,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Return to the start and take a new one',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(1))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:36,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:37,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:38,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:39,
        type: 'path_reveal',
        description: 'Ypu\'ve found a map with a shortcut',
    },
    {
        id:40,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:41,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:42,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:43,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:44,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:45,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:46,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:47,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:48,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:49,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:50,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Return to the start and take a new one',
        action: (dispatch)=>{
            dispatch(gameActions.changePosition(1))
            dispatch(gameActions.setDiceVal(null))
        }
    },
    {
        id:51,
        type: 'puzzle',
        description: 'You\'ve met a wizzard, he has a puzzle for you',
        actionDescription: 'Solve the puzzle to continue'
    },
    {
        id:52,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:53,
        type: 'empty',
        description: 'Nothing interesting here :('
    },
    {
        id:54,
        type: 'path_reveal',
        description: 'Ypu\'ve found a map with a shortcut',
    },
    {
        id:56,
        type: 'trap',
        description: 'Ups, some strange looking creature stole your shovel.',
        actionDescription: 'Move 3 cells back',
        action: (dispatch, currentPinPosition)=>{
            dispatch(gameActions.changePosition(currentPinPosition - 3))
            dispatch(gameActions.setDiceVal(null))
        }
    }


]