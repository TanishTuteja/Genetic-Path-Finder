# Genetic-Path-Finder
A Genetic Path Finder to find path to target while avoiding obstacles, written in javascript using p5.js

## Introduction

This is an implementation of the Evloutionary Genetic Algorithm to the problem of an agent finding a path to a target through obstacles.

## Setup of Environment

A fixed size population of agents is created. A fixed number of obstacles at specified positions but having random velocities is created.
A fixed target is created.

## Algorithm Used

1. Generate a population with a fixed number of random vectors in  their DNA
2. For every cycle, apply the vectors as forces on the agents. If an agent hits an obstalce, it dies.
3. Calculate fitness acoording to closeness to target. If an agent has died, reduce its fitness.
4. Select new parents on the basis of fitness with more fit individuals having higher chance of being selected
5. Generate new population by crossover and mutation.

## User Interaction

The user can click anywhere on the screen to move the target to that location and the algorithm will adapt to the change.

## To-Do List

- [ ] Allow user to make new obstacles.
- [ ] Allow the user to specify the velocities of obstalces.
- [ ] Allow the user to change parameters like mutation rate and population size dynamically.
- [ ] Record the best individual of each generation.

## Libraries Used

The code uses p5.js library.