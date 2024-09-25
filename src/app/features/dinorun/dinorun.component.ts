import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinorun',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dinorun.component.html',
  styleUrl: './dinorun.component.scss',
})
export class DinorunComponent implements OnInit {
  lives: number = 2;
  livesArray: any[] = [];
  isJumping: boolean = false;
  obstacles: any[] = [];
  powerup: any = null;
  gameOver: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.resetLives();
    this.startGame();
  }

  resetLives(): void {
    this.livesArray = new Array(this.lives);
  }

  startGame(): void {
    this.spawnObstacle();
    this.spawnPowerup();
  }

  jump(): void {
    if (!this.isJumping) {
      this.isJumping = true;
      setTimeout(() => (this.isJumping = false), 500);
    }
  }

  spawnObstacle(): void {
    setInterval(() => {
      if (!this.gameOver) {
        const obstacleType = Math.random() > 0.5 ? 'mdi-cactus' : 'mdi-rock';
        this.obstacles.push({ icon: obstacleType, position: 1000 });
        this.moveObstacles();
      }
    }, 2000);
  }

  moveObstacles(): void {
    this.obstacles.forEach((obstacle, index) => {
      const interval = setInterval(() => {
        obstacle.position -= 5;
        if (obstacle.position < 0) {
          clearInterval(interval);
          this.obstacles.splice(index, 1);
        }
        this.checkCollision(obstacle);
      }, 16);
    });
  }

  spawnPowerup(): void {
    setInterval(() => {
      if (!this.gameOver) {
        this.powerup = { position: 1000 };
        this.movePowerup();
      }
    }, 10000);
  }

  movePowerup(): void {
    const interval = setInterval(() => {
      if (this.powerup) {
        this.powerup.position -= 5;
        if (this.powerup.position < 0) {
          clearInterval(interval);
          this.powerup = null;
        }
        this.checkPowerup();
      }
    }, 16);
  }

  checkCollision(obstacle: any): void {
    if (obstacle.position < 100 && !this.isJumping) {
      this.lives--;
      this.resetLives();
      if (this.lives === 0) {
        this.endGame();
      }
    }
  }

  checkPowerup(): void {
    if (this.powerup && this.powerup.position < 100) {
      this.lives++;
      this.resetLives();
      this.powerup = null;
    }
  }

  endGame(): void {
    this.gameOver = true;
  }

  restartGame(): void {
    this.lives = 2;
    this.obstacles = [];
    this.powerup = null;
    this.gameOver = false;
    this.resetLives();
    this.startGame();
  }
}
