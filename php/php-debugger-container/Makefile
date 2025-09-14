@PHONY: up down exec tail_debug
up:
	docker compose build --no-cache && docker compose up --force-recreate
down:
	docker compose down
exec:
	docker exec -it php_debug sh
tail_debug:
	docker exec -it php_debug tail -f /tmp/xdebug.log 