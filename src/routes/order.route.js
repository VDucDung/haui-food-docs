/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management and retrieval
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a order
 *     description: Users can create order.
 *     tags: [Orders]
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
 *               - cartId
 *               - address
 *               - note
 *               - status
 *             properties:
 *               userId:
 *                 type: string
 *                 format: objectId
 *               cartId:
 *                 type: string
 *                 format: objectId
 *               address:
 *                 type: string
 *               note:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               userId: 6603ea7966785a9c4d3c9d0b
 *               cartId: 6603d90f7c2708f66ed2ee4c
 *               address: Bac Tu Lien, Ha Noi
 *               note: giao sau 2h
 *               status: pending
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 *   get:
 *     summary: Get all orders
 *     description: Retrieve a list of orders with optional filters.
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Order name to filter by
 *       - in: query
 *         name: orderId
 *         schema:
 *           type: string
 *         description: Order ID to filter by
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by query in the form of field:desc/asc (ex. price:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of orders to return
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
 *                     $ref: '#/components/schemas/Order'
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
