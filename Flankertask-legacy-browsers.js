/******************** 
 * Flankertask *
 ********************/


// store info about the experiment session:
let expName = 'Flankertask';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'gender': ["\u7537", "\u5973"],
    'age': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'deg',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(outer_loopLoopBegin(outer_loopLoopScheduler));
flowScheduler.add(outer_loopLoopScheduler);
flowScheduler.add(outer_loopLoopEnd);








const formalexpLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(formalexpLoopBegin(formalexpLoopScheduler));
flowScheduler.add(formalexpLoopScheduler);
flowScheduler.add(formalexpLoopEnd);





flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Flankertask.xlsx', 'path': 'Flankertask.xlsx'},
    {'name': 'Flankertask_formal.xlsx', 'path': 'Flankertask_formal.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instru_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instru_text',
    text: '欢迎您参加本实验，请阅读一下实验要求，按要求完成实验：\n\n实验开始时会持续呈现一个“十字架”的注视点，\n\n然后出现一个圆圈，在圆圈出现后，请紧盯圆圈\n\n再之后会开始呈现一排箭头（"←"或"→"）',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.15], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instru1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instru1_text',
    text: '当中间箭头为“←”时，请按“F”键\n\n当中间箭头为“→”时，请按“J”键',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.4196, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  instru2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instru2_text',
    text: '请在保证正确率的情况下尽可能快的完成实验\n\n接下来，请您按任意键开始实验',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.1)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  instru_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  randomfix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'randomfix', 
    vertices: 'cross', size:[1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "cue_random"
  cue_randomClock = new util.Clock();
  cue_fig_2 = new visual.Polygon({
    win: psychoJS.window, name: 'cue_fig_2', 
    edges: 100, size:[1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  fixation_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_2', 
    vertices: 'cross', size:[1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "ct_ISI"
  ct_ISIClock = new util.Clock();
  ct_randomfix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ct_randomfix', 
    vertices: 'cross', size:[1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  arrow1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow1', 
    vertices: 'arrow', size:[1, 1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  arrow2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow2', 
    vertices: 'arrow', size:[1, 1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  target_arrow = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_arrow', 
    vertices: 'arrow', size:[1, 1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  arrow3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow3', 
    vertices: 'arrow', size:[1, 1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  arrow4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow4', 
    vertices: 'arrow', size:[1, 1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  stimu_pre = new visual.Rect ({
    win: psychoJS.window, name: 'stimu_pre', 
    width: [35, 8][0], height: [35, 8][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -5, 
    interpolate: true, 
  });
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "judgement"
  judgementClock = new util.Clock();
  // Run 'Begin Experiment' code from judge
  massage = "";
  ncorr = [];
  
  judge_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'judge_text',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  judge_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: '实验结束，再次感谢您参与该实验！',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    instru_resp.keys = undefined;
    instru_resp.rt = undefined;
    _instru_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instru_text);
    instructionComponents.push(instru1_text);
    instructionComponents.push(instru2_text);
    instructionComponents.push(instru_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru_text* updates
    if (t >= 0.0 && instru_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_text.tStart = t;  // (not accounting for frame time here)
      instru_text.frameNStart = frameN;  // exact frame index
      
      instru_text.setAutoDraw(true);
    }
    
    
    // *instru1_text* updates
    if (t >= 0.0 && instru1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru1_text.tStart = t;  // (not accounting for frame time here)
      instru1_text.frameNStart = frameN;  // exact frame index
      
      instru1_text.setAutoDraw(true);
    }
    
    
    // *instru2_text* updates
    if (t >= 0.0 && instru2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru2_text.tStart = t;  // (not accounting for frame time here)
      instru2_text.frameNStart = frameN;  // exact frame index
      
      instru2_text.setAutoDraw(true);
    }
    
    
    // *instru_resp* updates
    if (t >= 0.0 && instru_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_resp.tStart = t;  // (not accounting for frame time here)
      instru_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru_resp.clearEvents(); });
    }
    
    if (instru_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru_resp.getKeys({keyList: [], waitRelease: false});
      _instru_resp_allKeys = _instru_resp_allKeys.concat(theseKeys);
      if (_instru_resp_allKeys.length > 0) {
        instru_resp.keys = _instru_resp_allKeys[_instru_resp_allKeys.length - 1].name;  // just the last key pressed
        instru_resp.rt = _instru_resp_allKeys[_instru_resp_allKeys.length - 1].rt;
        instru_resp.duration = _instru_resp_allKeys[_instru_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instru_resp.corr, level);
    }
    psychoJS.experiment.addData('instru_resp.keys', instru_resp.keys);
    if (typeof instru_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instru_resp.rt', instru_resp.rt);
        psychoJS.experiment.addData('instru_resp.duration', instru_resp.duration);
        routineTimer.reset();
        }
    
    instru_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function outer_loopLoopBegin(outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'outer_loop'
    });
    psychoJS.experiment.addLoop(outer_loop); // add the loop to the experiment
    currentLoop = outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    outer_loop.forEach(function() {
      snapshot = outer_loop.getSnapshot();
    
      outer_loopLoopScheduler.add(importConditions(snapshot));
      const practiceLoopScheduler = new Scheduler(psychoJS);
      outer_loopLoopScheduler.add(practiceLoopBegin(practiceLoopScheduler, snapshot));
      outer_loopLoopScheduler.add(practiceLoopScheduler);
      outer_loopLoopScheduler.add(practiceLoopEnd);
      outer_loopLoopScheduler.add(judgementRoutineBegin(snapshot));
      outer_loopLoopScheduler.add(judgementRoutineEachFrame());
      outer_loopLoopScheduler.add(judgementRoutineEnd(snapshot));
      outer_loopLoopScheduler.add(outer_loopLoopEndIteration(outer_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Flankertask.xlsx',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice.forEach(function() {
      snapshot = practice.getSnapshot();
    
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(ISIRoutineBegin(snapshot));
      practiceLoopScheduler.add(ISIRoutineEachFrame());
      practiceLoopScheduler.add(ISIRoutineEnd(snapshot));
      practiceLoopScheduler.add(cue_randomRoutineBegin(snapshot));
      practiceLoopScheduler.add(cue_randomRoutineEachFrame());
      practiceLoopScheduler.add(cue_randomRoutineEnd(snapshot));
      practiceLoopScheduler.add(ct_ISIRoutineBegin(snapshot));
      practiceLoopScheduler.add(ct_ISIRoutineEachFrame());
      practiceLoopScheduler.add(ct_ISIRoutineEnd(snapshot));
      practiceLoopScheduler.add(trialRoutineBegin(snapshot));
      practiceLoopScheduler.add(trialRoutineEachFrame());
      practiceLoopScheduler.add(trialRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function outer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(outer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function outer_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function formalexpLoopBegin(formalexpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    formalexp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Flankertask_formal.xlsx',
      seed: undefined, name: 'formalexp'
    });
    psychoJS.experiment.addLoop(formalexp); // add the loop to the experiment
    currentLoop = formalexp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    formalexp.forEach(function() {
      snapshot = formalexp.getSnapshot();
    
      formalexpLoopScheduler.add(importConditions(snapshot));
      formalexpLoopScheduler.add(ISIRoutineBegin(snapshot));
      formalexpLoopScheduler.add(ISIRoutineEachFrame());
      formalexpLoopScheduler.add(ISIRoutineEnd(snapshot));
      formalexpLoopScheduler.add(cue_randomRoutineBegin(snapshot));
      formalexpLoopScheduler.add(cue_randomRoutineEachFrame());
      formalexpLoopScheduler.add(cue_randomRoutineEnd(snapshot));
      formalexpLoopScheduler.add(ct_ISIRoutineBegin(snapshot));
      formalexpLoopScheduler.add(ct_ISIRoutineEachFrame());
      formalexpLoopScheduler.add(ct_ISIRoutineEnd(snapshot));
      formalexpLoopScheduler.add(trialRoutineBegin(snapshot));
      formalexpLoopScheduler.add(trialRoutineEachFrame());
      formalexpLoopScheduler.add(trialRoutineEnd(snapshot));
      formalexpLoopScheduler.add(formalexpLoopEndIteration(formalexpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function formalexpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(formalexp);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function formalexpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ISIClock.reset();
    routineTimer.reset();
    ISIMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    import * as random from 'random';
    duration = ((Math.random.random() / 2) + 0.05);
    
    psychoJS.experiment.addData('ISI.started', globalClock.getTime());
    ISIMaxDuration = null
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(randomfix);
    
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI' ---
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *randomfix* updates
    if (t >= 0.0 && randomfix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      randomfix.tStart = t;  // (not accounting for frame time here)
      randomfix.frameNStart = frameN;  // exact frame index
      
      randomfix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (randomfix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      randomfix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI' ---
    ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ISI.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    psychoJS.experiment.addData("random_duration", duration);
    
    // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function cue_randomRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cue_random' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    cue_randomClock.reset(routineTimer.getTime());
    routineTimer.add(0.550000);
    cue_randomMaxDurationReached = false;
    // update component parameters for each repeat
    cue_fig_2.setPos([0, cue_pos]);
    psychoJS.experiment.addData('cue_random.started', globalClock.getTime());
    cue_randomMaxDuration = null
    // keep track of which components have finished
    cue_randomComponents = [];
    cue_randomComponents.push(cue_fig_2);
    cue_randomComponents.push(fixation_2);
    
    cue_randomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function cue_randomRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cue_random' ---
    // get current time
    t = cue_randomClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_fig_2* updates
    if (t >= 0.4 && cue_fig_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_fig_2.tStart = t;  // (not accounting for frame time here)
      cue_fig_2.frameNStart = frameN;  // exact frame index
      
      cue_fig_2.setAutoDraw(true);
    }
    
    frameRemains = 0.4 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_fig_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_fig_2.setAutoDraw(false);
    }
    
    
    // *fixation_2* updates
    if (t >= 0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.55 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cue_randomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function cue_randomRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cue_random' ---
    cue_randomComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cue_random.stopped', globalClock.getTime());
    if (cue_randomMaxDurationReached) {
        cue_randomClock.add(cue_randomMaxDuration);
    } else {
        cue_randomClock.add(0.550000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ct_ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ct_ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ct_ISIClock.reset();
    routineTimer.reset();
    ct_ISIMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    import * as random from 'random';
    dur = ((Math.random.random() * 0.3) + 0.2);
    
    psychoJS.experiment.addData('ct_ISI.started', globalClock.getTime());
    ct_ISIMaxDuration = null
    // keep track of which components have finished
    ct_ISIComponents = [];
    ct_ISIComponents.push(ct_randomfix);
    
    ct_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ct_ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ct_ISI' ---
    // get current time
    t = ct_ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ct_randomfix* updates
    if (t >= 0.0 && ct_randomfix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ct_randomfix.tStart = t;  // (not accounting for frame time here)
      ct_randomfix.frameNStart = frameN;  // exact frame index
      
      ct_randomfix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ct_randomfix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ct_randomfix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ct_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ct_ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ct_ISI' ---
    ct_ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ct_ISI.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    psychoJS.experiment.addData("random_duration", dur);
    
    // the Routine "ct_ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(1.600000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    arrow1.setPos([(- 3), stimu_pos]);
    arrow1.setOri(other_ori);
    arrow2.setPos([(- 1.5), stimu_pos]);
    arrow2.setOri(other_ori);
    target_arrow.setPos([0, stimu_pos]);
    target_arrow.setOri(target_ori);
    arrow3.setPos([1.5, stimu_pos]);
    arrow3.setOri(other_ori);
    arrow4.setPos([3, stimu_pos]);
    arrow4.setOri(other_ori);
    stimu_pre.setOpacity(stimu_opa);
    stimu_pre.setPos([0, stimu_pos]);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(arrow1);
    trialComponents.push(arrow2);
    trialComponents.push(target_arrow);
    trialComponents.push(arrow3);
    trialComponents.push(arrow4);
    trialComponents.push(stimu_pre);
    trialComponents.push(fixation);
    trialComponents.push(resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *arrow1* updates
    if (t >= 0 && arrow1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow1.tStart = t;  // (not accounting for frame time here)
      arrow1.frameNStart = frameN;  // exact frame index
      
      arrow1.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrow1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow1.setAutoDraw(false);
    }
    
    
    // *arrow2* updates
    if (t >= 0 && arrow2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow2.tStart = t;  // (not accounting for frame time here)
      arrow2.frameNStart = frameN;  // exact frame index
      
      arrow2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrow2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow2.setAutoDraw(false);
    }
    
    
    // *target_arrow* updates
    if (t >= 0 && target_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_arrow.tStart = t;  // (not accounting for frame time here)
      target_arrow.frameNStart = frameN;  // exact frame index
      
      target_arrow.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_arrow.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_arrow.setAutoDraw(false);
    }
    
    
    // *arrow3* updates
    if (t >= 0 && arrow3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow3.tStart = t;  // (not accounting for frame time here)
      arrow3.frameNStart = frameN;  // exact frame index
      
      arrow3.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrow3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow3.setAutoDraw(false);
    }
    
    
    // *arrow4* updates
    if (t >= 0 && arrow4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow4.tStart = t;  // (not accounting for frame time here)
      arrow4.frameNStart = frameN;  // exact frame index
      
      arrow4.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (arrow4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow4.setAutoDraw(false);
    }
    
    
    // *stimu_pre* updates
    if (t >= 0 && stimu_pre.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimu_pre.tStart = t;  // (not accounting for frame time here)
      stimu_pre.frameNStart = frameN;  // exact frame index
      
      stimu_pre.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimu_pre.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimu_pre.setAutoDraw(false);
    }
    
    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *resp* updates
    if (t >= 0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    frameRemains = 0 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // was this correct?
        if (resp.keys == bottom) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(bottom)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        routineTimer.reset();
        }
    
    resp.stop();
    if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(1.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function judgementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'judgement' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    judgementClock.reset();
    routineTimer.reset();
    judgementMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from judge
    ncorr.push(resp.corr);
    correctans = util.sum(ncorr);
    totalans = ncorr.length;
    correctrate = Number.parseFloat((correctans / totalans));
    if ((correctrate >= 0.8)) {
        massage = "\u8bad\u7ec3\u5b8c\u6210\uff0c\u63a5\u4e0b\u6765\u8bf7\u6309\u4efb\u610f\u952e\u5f00\u59cb\u6b63\u5f0f\u5b9e\u9a8c";
        outer_loop.finished = true;
    } else {
        massage = "\u8bad\u7ec3\u5931\u8d25\uff0c\u63a5\u4e0b\u6765\u8bf7\u6309\u4efb\u610f\u952e\u91cd\u65b0\u5f00\u59cb\u8bad\u7ec3";
        ncorr.clear();
    }
    
    judge_text.setText(massage);
    judge_resp.keys = undefined;
    judge_resp.rt = undefined;
    _judge_resp_allKeys = [];
    psychoJS.experiment.addData('judgement.started', globalClock.getTime());
    judgementMaxDuration = null
    // keep track of which components have finished
    judgementComponents = [];
    judgementComponents.push(judge_text);
    judgementComponents.push(judge_resp);
    
    judgementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function judgementRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'judgement' ---
    // get current time
    t = judgementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *judge_text* updates
    if (t >= 0.0 && judge_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      judge_text.tStart = t;  // (not accounting for frame time here)
      judge_text.frameNStart = frameN;  // exact frame index
      
      judge_text.setAutoDraw(true);
    }
    
    
    // *judge_resp* updates
    if (t >= 0.0 && judge_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      judge_resp.tStart = t;  // (not accounting for frame time here)
      judge_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { judge_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { judge_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { judge_resp.clearEvents(); });
    }
    
    if (judge_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = judge_resp.getKeys({keyList: [], waitRelease: false});
      _judge_resp_allKeys = _judge_resp_allKeys.concat(theseKeys);
      if (_judge_resp_allKeys.length > 0) {
        judge_resp.keys = _judge_resp_allKeys[_judge_resp_allKeys.length - 1].name;  // just the last key pressed
        judge_resp.rt = _judge_resp_allKeys[_judge_resp_allKeys.length - 1].rt;
        judge_resp.duration = _judge_resp_allKeys[_judge_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    judgementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function judgementRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'judgement' ---
    judgementComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('judgement.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(judge_resp.corr, level);
    }
    psychoJS.experiment.addData('judge_resp.keys', judge_resp.keys);
    if (typeof judge_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('judge_resp.rt', judge_resp.rt);
        psychoJS.experiment.addData('judge_resp.duration', judge_resp.duration);
        routineTimer.reset();
        }
    
    judge_resp.stop();
    // the Routine "judgement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
