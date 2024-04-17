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
*
*   get:
*     summary: Get all conversations
*     description: Retrieve a list of conversations with optional filters.
*     tags: [Conversations]
*     parameters:
*       - in: query
*         name: name
*         schema:
*           type: string
*         description: Conversation name to filter by
*       - in: query
*         name: sortBy
*         schema:
*           type: string
*         description: Sort by query in the form of field:desc/asc (ex. name:asc)
*       - in: query
*         name: limit
*         schema:
*           type: integer
*           minimum: 1
*         default: 10
*         description: Maximum number of conversations to return
*       - in: query
*         name: page
*         schema:
*           type: integer
*           minimum: 1
*           default: 1
*         description: Page number of the results
*     responses:
*       "200":
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 results:
*                   type: array
*                   items:
*                     $ref: '#/components/schemas/Conversation'
*                 page:
*                   type: integer
*                   example: 1
*                 limit:
*                   type: integer
*                   example: 10
*                 totalPages:
*                   type: integer
*                   example: 1
*                 totalResults:
*                   type: integer
*                   example: 1
*       "401":
*         $ref: '#/components/responses/Unauthorized'
*       "403":
*         $ref: '#/components/responses/Forbidden'
*/

/**
 * @swagger
 * /conversations/{id}:
 *   get:
 *     summary: Get a conversation by ID
 *     description: Retrieve a specific conversation by its ID.
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the conversation to retrieve
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *   put:
 *     summary: Update a conversation by ID
 *     description: Users can update a conversation.
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the cart to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participants:
 *                 type: array
 *               message:
 *                 type: array
 *             example:
 *               participants: [6602f79a65bdc867e599b25e, 65fd6f75b449440a709beaa7]
 *               message: [6602f79a65bdc867e599b25e]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *   delete:
 *     summary: Delete a conversation by ID
 *     description: Users can delete a conversation.
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the conversation to delete
 *     responses:
 *       "200":
 *         description: No Content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
