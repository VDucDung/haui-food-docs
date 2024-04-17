/**
* @swagger
* tags:
*   name: Conversations
*   description: Conversation management and retrieval
*/

/**
* @swagger
* /conversations:
*   post:
*     summary: Create a conversation
*     description: Users can create conversation.
*     tags: [Conversations]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - participants
*               - message
*             properties:
*               participants:
*                 type: array
*               message:
*                 type: array
*             example:
*               participants: [6602f79a65bdc867e599b25e, 65fd6f75b449440a709beaa7]
*               message: [6602f79a65bdc867e599b25e]
*     responses:
*       "201":
*         description: Created
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Conversation'
*       "401":
*         $ref: '#/components/responses/Unauthorized'
*       "403":
*         $ref: '#/components/responses/Forbidden'
*/
