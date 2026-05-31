SELECT u.full_name,
       e.status,
       COUNT(*) AS event_count
FROM Users u
JOIN Events e
ON u.user_id = e.organizer_id
GROUP BY u.full_name,
         e.status;