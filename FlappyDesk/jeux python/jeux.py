import pygame

pygame.init()

backgroundColor = (236, 240, 241)

windowHeigt = 1280
windowsWidth = 720

buissnessManHeight = 52
buissnessManWidht = 20

centerManH = buissnessManHeight / 2
centerManW = buissnessManWidht / 2

buissnessManBody = pygame.image.load('man.png')

window = pygame.display.set_mode((windowHeigt, windowsWidth))
window.fill(backgroundColor)
pygame.display.set_caption("FlappyDesk")

clock = pygame.time.Clock()

def manPosition(x,y,img):
    window.blit(buissnessManBody, (x,y))


def main():
    game_status = 1

    posManX = 200
    posManY = 608

    mooveManY = 0
    mooveManX = 0

    while game_status != 0:
        # Detect quit game
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_status = 0

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP:
                    mooveManX = 0
                    mooveManY = -1
                if event.key == pygame.K_DOWN:
                    mooveManX = 0
                    mooveManY = 1
                if event.key == pygame.K_LEFT:
                    mooveManY = 0
                    mooveManX = -1
                if event.key == pygame.K_RIGHT:
                    mooveManY = 0
                    mooveManX = 1


        if (posManY > 1 and posManX > 1 and posManY < 719 and posManX < 1279):
            window.fill((255,255,255)) # fill the screen with white
            posManY+=mooveManY
            posManX+=mooveManX
            manPosition(posManX,posManY,buissnessManBody)
        else:
            window.blit(pygame.image.load('Game_Over.png'), (0,0))
            if event.type == pygame.KEYDOWN:
                pygame.quit()



        clock.tick(30)
        pygame.display.update()


main()

pygame.quit()
quit()
