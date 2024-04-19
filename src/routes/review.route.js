/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management and retrieval
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a review
 *     description: Only admins can create review.
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *               - orderId
 *               - rating
 *               - isReview
 *               - comment
 *             properties:
 *               userId:
 *                 type: string
 *                 format: objectId
 *               productId:
 *                 type: string
 *                 format: objectId
 *               orderId:
 *                 type: string
 *                 format: objectId
 *               rating:
 *                  type: number
 *               isReview:
 *                  type: boolean
 *               comment:
 *                  type: string
 *             example:
 *               userId: 5ebac534954b54139806c112
 *               productId: 5ebac534954b54139806c112
 *               orderId: 6603d90f7c2708f66ed2ee4c
 *               rating: 0
 *               isReview: false
 *               comment: fake comment
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Review'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 * 
 *   get:
 *     summary: Get all reviews
 *     description: Retrieve a list of reviews with optional filters.
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Review name to filter by
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
 *         description: Maximum number of review to return
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
 *                     $ref: '#/components/schemas/Review'
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
 * /reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     description: Retrieve a specific review by its ID.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review to retrieve
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *   put:
 *     summary: Update a review by ID
 *     description: Only admins can update a review.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 format: objectId
 *               productId:
 *                 type: string
 *                 format: objectId
 *               orderId:
 *                 type: string
 *                 format: objectId
 *               rating:
 *                  type: number
 *               isReview:
 *                  type: boolean
 *               comment:
 *                  type: string
 *             example:
 *               userId: 5ebac534954b54139806c112
 *               productId: 5ebac534954b54139806c112
 *               orderId: 6603d90f7c2708f66ed2ee4c
 *               rating: 0
 *               isReview: false
 *               comment: fake comment
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *   delete:
 *     summary: Delete a review by ID
 *     description: Only admins can delete a review.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review to delete
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
