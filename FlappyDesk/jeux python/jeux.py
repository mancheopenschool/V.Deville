import pygame

pygame.init()

backgroundColor = (236, 240, 241)

windowHeigt = 1280
windowsWidth = 720

buissnessManHeight = 52
buissnessManWidht = 20

centerManH = buissnessManHeight / 2
centerManW = buissnessManWidht / 2

buissnessManBody = pygame.image.load('ballon01.png')

window = pygame.display.set_mode((windowHeigt, windowsWidth))
window.fill(backgroundColor)
pygame.display.set_caption("FlappyDesk")


def manPosition(x,y,img):
    window.blit(buissnessManBody, (x,y))

def main():
    game_status = 1

    posManX = 200
    posManY = 608

    mooveManY = 0

    while game_status != 0:
        # Detect quit game
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_status = 0

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    mooveManY = - 50

            if event.type == pygame.KEYUP:
                if event.key == pygame.K_SPACE:
                    mooveManY = 50

        posManY+=mooveManY
        manPosition(posManX,posManY,buissnessManBody)
        pygame.time.delay(120)
        pygame.display.update()

main()

pygame.quit()
quit()
